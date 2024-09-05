using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OXGame.Data.Extension
{
    public static class ObjectCastExtension
    {
        public static T GetValue<T>(this object source, string property)
        {
            if (source == null)
                throw new ArgumentNullException("source");

            var sourceType = source.GetType();
            var sourceProperties = sourceType.GetProperties();

            var propertyValue = (from s in sourceProperties
                                 where s.Name.Equals(property)
                                 select s.GetValue(source, null)).FirstOrDefault();

            return propertyValue != null ? (T)propertyValue : default(T);
        }
    }
}
