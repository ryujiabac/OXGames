using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OXGame.Data.Model
{
    public class CostomModel
    {
    }
    public class GameModel
    {
        public int GameID { get; set; }
        public System.DateTime GameDate { get; set; }
        public int GameStatusID { get; set; }
        public int GameDuration { get; set; }
        public string GameDesc { get; set; }
        public string GameComment { get; set; }
        public string ClientIP { get; set; }
    }
    public class Statistic
    {
        public double XwinPercent { get; set; }
        public double OwinPercent { get; set; }
        public double DrawGamePercent { get; set; }
        public double QuitGamePercent { get; set; }
    }
    public class JsonResultModel
    {
        public int ErrorCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

        public JsonResultModel()
        {
            ErrorCode = 0;
            Message = string.Empty;
            Data = null;
        }

        public JsonResultModel(object data)
        {

            ErrorCode = 0;
            Message = string.Empty;
            Data = data;
        }

        public JsonResultModel(int errorcode, string message, object data)
        {

            ErrorCode = errorcode;
            Message = message;
            Data = data;
        }
    }
}
