using OXGame.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OXGame.Data.Extension;
using System.Data;

namespace OXGame.Data.Repository
{
    public class GameStatus
    {
        public List<GameModel> GetGameStatus(int pageNum, int pageSize, string sortExpression, string sortDirection, string keyWord, out int totalRows)
        {
            using (OXGameEntities sv = new OXGameEntities())
            {
                var query = from c in sv.Games.AsQueryable() select c;
                bool asc = !sortDirection.ToUpper().Contains("ASC");

                var query2 = (from c in query
                              join d in sv.GameStatus on c.GameStatusID equals d.GameStatusID
                              orderby c.GameID descending
                              select new GameModel()
                              {
                                  GameID = c.GameID,
                                  GameDate = c.GameDate,
                                  GameStatusID = c.GameStatusID,
                                  GameDesc = d.GameStatusDesc,
                                  GameDuration = c.GameDuration

                              }).Page(pageNum, pageSize, e => e.GameID, sortExpression, asc, out totalRows);
                return query2.ToList();
            }
        }

        public int SaveGameStatus(string gameDesc, string gameDuration, string GameComment, string ClientIP)
        {
            using (OXGameEntities sv = new OXGameEntities())
            {
                Game game = new Game();
                game.GameDate = DateTime.Now;
                game.GameStatusID = Int32.Parse(gameDesc);
                game.GameDuration = Int32.Parse(gameDuration);
                game.GameComment = GameComment;
                game.ClientIP = ClientIP;
                sv.Entry(game).State = EntityState.Added;
                sv.SaveChanges();
                return 1;
            }

        }

        public List<Statistic> getGameStatistic(int pageNum, int pageSize, string sortExpression, string sortDirection, string keyWord)
        {
            using (OXGameEntities sv = new OXGameEntities())
            {
               
                double totalRow = sv.Games.Count();
                double Xpercent = sv.Games.Where(c => c.GameStatusID == 1).Count();
                double Opercent = sv.Games.Where(c => c.GameStatusID == 2).Count();
                double Drawpercent = sv.Games.Where(c => c.GameStatusID == 3).Count();
                double Quitpercent = sv.Games.Where(c => c.GameStatusID == 4).Count();

                var returnResultList = new List<Statistic>();
                var result = new Statistic();
            
                if(totalRow == 0)
                { result.XwinPercent = 0;
                  result.OwinPercent = 0;
                  result.DrawGamePercent = 0;
                  result.QuitGamePercent = 0;

                }
                else 
                {
                    result.XwinPercent = (Xpercent * 100) / totalRow;
                    result.OwinPercent = (Opercent * 100) / totalRow;
                    result.DrawGamePercent = (Drawpercent * 100) / totalRow;
                    result.QuitGamePercent = (Quitpercent * 100) / totalRow;
                }
                returnResultList.Add(result);
                return returnResultList.ToList();
            }

        }

    }
}
