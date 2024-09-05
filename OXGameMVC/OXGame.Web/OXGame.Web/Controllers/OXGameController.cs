using OXGame.Data.Repository;
using OXGame.Data.Extension;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OXGame.Web.Models;
using OXGame.Data.Model;
using System.Net;
using System.Net.Sockets;

namespace OXGame.Web.Controllers
{
    public class OXGameController : Controller
    {
        //
        // GET: /OXGame/

        public ActionResult Index()
        {
            return View();
        }

        #region Ajax
        public ActionResult AjaxSaveGameResult(string gameDesc, string gameDuration, string gameComment)
        {
            string ClientIP = GetIP4Address();
            GameStatus gs = new GameStatus();
            int x = gs.SaveGameStatus(gameDesc, gameDuration, gameComment, ClientIP);

            JsonResult json = JsonSuccess(
                 new
                 {
                     sEcho = "",
                     iTotalRecords = "",
                     iTotalDisplayRecords = "",
                     aaData = x
                 }
                 );
            return json;
        }
        public ActionResult AjaxStaticList(JQueryDataTableParamModel param)
        {
            GameStatus gs = new GameStatus();
            var sortDirection = param.sSortDir(0); // asc or desc
            //sortDirection = "desc";
            var sortField =
                  (param.iSortCol(0) == 1 && param.bSortable(1)) ? "XwinPercent" :
                  (param.iSortCol(0) == 2 && param.bSortable(2)) ? "OwinPercent" :
                  (param.iSortCol(0) == 3 && param.bSortable(3)) ? "DrawGamePercent" :
                  (param.iSortCol(0) == 4 && param.bSortable(4)) ? "GameDuration" : "QuitGamePercent";

            var totalRecord = 0;

            List<Statistic> result = new List<Statistic>();
            result = gs.getGameStatistic(param.pageNum, param.pageSize, sortField, sortDirection, param.sSearch);

            var resultJson = (from c in result.ToList()
                              select new List<object>{                                           
                                           c.GetValue<double>("XwinPercent").ToString("#,##0.00")+"%", 
                                           c.GetValue<double>("OwinPercent").ToString("#,##0.00")+"%",
                                           c.GetValue<double>("DrawGamePercent").ToString("#,##0.00")+"%",
                                           c.GetValue<double>("QuitGamePercent").ToString("#,##0.00")+"%"
                                          });

            JsonResult json = JsonSuccess(
                new
                {
                    sEcho = param.sEcho,
                    iTotalRecords = result.Count(),
                    iTotalDisplayRecords = 1,
                    aaData = resultJson
                }
                );
            return json;

        }
        public ActionResult AjaxOXGameList(JQueryDataTableParamModel param)
        {
            GameStatus gs = new GameStatus();
            

            var sortDirection = param.sSortDir(0); // asc or desc
            //sortDirection = "desc";
            var sortField =
                  (param.iSortCol(0) == 1 && param.bSortable(1)) ? "GameID" :
                  (param.iSortCol(0) == 2 && param.bSortable(2)) ? "GameDate" :
                  (param.iSortCol(0) == 3 && param.bSortable(3)) ? "GameDesc" :
                  (param.iSortCol(0) == 4 && param.bSortable(4)) ? "GameDuration" : "GameID";

            var totalRecord = 0;


            var result = gs.GetGameStatus(param.pageNum, param.pageSize, sortField, sortDirection, param.sSearch, out totalRecord);
            var resultJson = (from c in result.ToList()
                              select new List<object>{ 
                                           c.GetValue<int>("GameID").ToString(), 
                                           c.GetValue<DateTime>("GameDate").ToShortDateString(),
                                           c.GetValue<string>("GameDesc"),
                                           c.GetValue<int>("GameDuration").ToString()
                                          });

            JsonResult json = JsonSuccess(
                  new
                  {
                      sEcho = param.sEcho,
                      iTotalRecords = result.Count(),
                      iTotalDisplayRecords = totalRecord,
                      aaData = resultJson
                  }
                  );
            return json;
        }
        #endregion
        #region Core ActionResult
        public JsonResult JsonSuccess(object data)
        {
            return Json(new JsonResultModel(0, "Error", data), JsonRequestBehavior.AllowGet
           );

        }
        #endregion
        #region PrivateMetod
        private string GetIP4Address()
        {
            string IP4Address = String.Empty;

            foreach (IPAddress IPA in Dns.GetHostAddresses(Dns.GetHostName()))
            {
                if (IPA.AddressFamily == AddressFamily.InterNetwork)
                {
                    IP4Address = IPA.ToString();
                    break;
                }
            }

            return IP4Address;
        }
        #endregion
    }
}
