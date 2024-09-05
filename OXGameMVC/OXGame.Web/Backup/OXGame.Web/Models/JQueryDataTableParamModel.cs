namespace OXGame.Web.Models
{
    public class JQueryDataTableParamModel
    {
        /// <summary>
        /// Request sequence number sent by DataTable, same value must be returned in response
        /// </summary>       
        public string sEcho { get; set; }

        /// <summary>
        /// Text used for filtering
        /// </summary>
        public string sSearch { get; set; }

        /// <summary>
        /// Number of records that should be shown in table
        /// </summary>
        public int iDisplayLength { get; set; }

        /// <summary>
        /// First record that should be shown(used for paging)
        /// </summary>
        public int iDisplayStart { get; set; }

        /// <summary>
        /// Number of columns in table
        /// </summary>
        public int iColumns { get; set; }

        /// <summary>
        /// Number of columns that are used in sorting
        /// </summary>
        public int iSortingCols { get; set; }

        /// <summary>
        /// Comma separated list of column names
        /// </summary>
        public string sColumns { get; set; }

        //======= add by #Ryuji ========/
        //======= custom properties ========/
        //======= use for standard respository paging parameter ========/
        public int pageNum
        {
            get { return (this.iDisplayStart / (this.iDisplayLength == 0 ? 1 : this.iDisplayLength)) + 1; }
        }
        public int pageSize
        {
            get
            {

                if (this.iDisplayLength < 0)  // if "bPaginate": false //-1
                    return int.MaxValue;

                return this.iDisplayLength;

            }
        }
        public int iSortCol(int index)
        {
            return System.Convert.ToInt32(System.Web.HttpContext.Current.Request[string.Format("iSortCol_{0}", index)]);
        }
        public bool bSortable(int index)
        {
            return System.Convert.ToBoolean(System.Web.HttpContext.Current.Request[string.Format("bSortable_{0}", index)]);
        }

        public string sSortDir(int index)
        {
            return System.Convert.ToString(System.Web.HttpContext.Current.Request[string.Format("sSortDir_{0}", index)]);
        }

    }
}