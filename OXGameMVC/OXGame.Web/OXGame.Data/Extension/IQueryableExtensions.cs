using System;
using System.Collections.Generic;
using System.Data.Linq.SqlClient;
using System.Linq;
using System.Text;
using System.Linq.Expressions;


namespace OXGame.Data.Extension
{
    public static class ExtensionMethods
    {
        private static string FuncToString(Expression selector)
        {

            switch (selector.NodeType)
            {

                case ExpressionType.MemberAccess:

                    return ((selector as MemberExpression).Member as System.Reflection.PropertyInfo).Name;

                case ExpressionType.Call:

                    var method = selector as MethodCallExpression;

                    return FuncToString(method.Arguments[0]) + "." + FuncToString(method.Arguments[1]);

                case ExpressionType.Quote:

                    return FuncToString(((selector as UnaryExpression).Operand as LambdaExpression).Body);

            }

            throw new InvalidOperationException();

        }

        public static IQueryable<T> OrderBy<T>(this IQueryable<T> source, string propertyName, bool asc)
        {
            var type = typeof(T);
            string methodName = asc ? "OrderBy" : "OrderByDescending";
            var property = type.GetProperty(propertyName);
            var parameter = Expression.Parameter(type, "p");
            var propertyAccess = Expression.MakeMemberAccess(parameter, property);
            var orderByExp = Expression.Lambda(propertyAccess, parameter);
            MethodCallExpression resultExp = Expression.Call(typeof(Queryable), methodName, new Type[] { type, property.PropertyType }, source.Expression, Expression.Quote(orderByExp));
            return source.Provider.CreateQuery<T>(resultExp);
        }
        public static IQueryable<T> Like<T>(this IQueryable<T> source, string propertyName, string keyword)
        {
            var type = typeof(T);
            var property = type.GetProperty(propertyName);
            var parameter = Expression.Parameter(type, "p");
            var propertyAccess = Expression.MakeMemberAccess(parameter, property);
            var constant = Expression.Constant("%" + keyword + "%");
            MethodCallExpression methodExp = Expression.Call(null, typeof(SqlMethods).GetMethod("Like", new Type[] { typeof(string), typeof(string) }), propertyAccess, constant);
            Expression<Func<T, bool>> lambda = Expression.Lambda<Func<T, bool>>(methodExp, parameter);
            return source.Where(lambda);
        }
        public static IQueryable<T> Like<T, TResult>(this IQueryable<T> source, Expression<Func<T, TResult>> likeByProperty, string keyword)
        {
            var type = typeof(T);
            var property = type.GetProperty(FuncToString(likeByProperty.Body));
            var parameter = Expression.Parameter(type, "p");
            var propertyAccess = Expression.MakeMemberAccess(parameter, property);
            var constant = Expression.Constant("%" + keyword + "%");
            MethodCallExpression methodExp = Expression.Call(null, typeof(SqlMethods).GetMethod("Like", new Type[] { typeof(string), typeof(string) }), propertyAccess, constant);
            Expression<Func<T, bool>> lambda = Expression.Lambda<Func<T, bool>>(methodExp, parameter);
            return source.Where(lambda);
        }


        //http://ahmedelbaz.com/2010/05/03/entity-framework-and-linq-to-sql-paging/
        public static IQueryable<T> Page<T, TResult>(this IQueryable<T> query,
                        int pageNum, int pageSize,
                        Expression<Func<T, TResult>> defaultSortingExpression, string orderBy,
                        bool isAscendingOrder, out int rowsCount)
        {
            if (pageSize <= 0) pageSize = 10;

            rowsCount = query.Count();

            if (rowsCount <= pageSize || pageNum <= 0) pageNum = 1;

            int excludedRows = (pageNum - 1) * pageSize;

            if (!string.IsNullOrEmpty(orderBy))
            {
                query = query.OrderBy(orderBy, isAscendingOrder);
            }
            else
            {

                if (isAscendingOrder)
                    query = query.OrderBy(defaultSortingExpression);
                else
                    query = query.OrderByDescending(defaultSortingExpression);
            }

            return query.Skip(excludedRows).Take(pageSize);
        }

        public static IQueryable<T> Page<T, TResult>(this IQueryable<T> query,
                        int pageNum, int pageSize,
                        string orderByProperty, string orderByProperty2,
                        bool isAscendingOrder, out int rowsCount)
        {
            if (pageSize <= 0) pageSize = 20;

            rowsCount = query.Count();

            if (rowsCount <= pageSize || pageNum <= 0) pageNum = 1;

            int excludedRows = (pageNum - 1) * pageSize;

            query = query.OrderBy(orderByProperty, isAscendingOrder);

            return query.Skip(excludedRows).Take(pageSize);
        }
    }
}
