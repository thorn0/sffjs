#pragma warning disable 0649

using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Web.Script.Serialization;

class Arg
{
	public string Format, Culture;
	public object[] Args = new object[0];
}

class Result
{
    public string ReturnValue, Format, Error;
}

public class Checker
{
	static Result Process(string[] args) {
        if (args == null || args.Length != 1) {
            return new Result { Error = "Invalid argument" };
        }
		Arg arg;
		try {
            var serializer = new JavaScriptSerializer(new SpecialValueTypeResolver());
            serializer.RegisterConverters(new[] { new SpecialValueConverter() });
			arg = serializer.Deserialize<Arg>(args[0]);
		} catch (Exception e){
			return new Result { Error = "Invalid JSON: " + args[0] };
		}
        try {
            var culture = arg.Culture == null ? CultureInfo.InvariantCulture : CultureInfo.GetCultureInfo(arg.Culture);
		    return new Result { ReturnValue = String.Format(culture, arg.Format, arg.Args), Format = arg.Format };
        } catch (Exception e) {
            return new Result { Error = e.Message };
        }
	}

	public static void Main(string[] args) {
		Console.WriteLine(UnicodeEscape(new JavaScriptSerializer().Serialize(Process(args))));
	}

    static string UnicodeEscape(string s) {
		var sb = new StringBuilder();
		foreach (var c in s) {
			if (c > 127) {
				sb.Append(String.Format(@"\u{0:X4}", Convert.ToInt32(c)));
            } else {
				sb.Append(c);
			}
		}
		return sb.ToString();
	}
}

class SerializedSpecialValue {}

class SpecialValueConverter : JavaScriptConverter
{
	public override object Deserialize(IDictionary<string, object> dict, Type type, JavaScriptSerializer serializer) {
		var kind = Convert.ToString(dict["kind"]);
        if (kind == "number") {
            return Convert.ToDouble(dict["value"], CultureInfo.InvariantCulture);
        }
        if (kind == "datetime") {
            return new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(Convert.ToInt64(dict["value"])).ToLocalTime();
        }
        return null;
	}

	public override IEnumerable<Type> SupportedTypes {
		get {
			yield return typeof(SerializedSpecialValue);
		}
	}

	public override IDictionary<string, object> Serialize(object obj, JavaScriptSerializer serializer) {
		throw new NotImplementedException();
	}
}

class SpecialValueTypeResolver : JavaScriptTypeResolver
{
	public override Type ResolveType(string id) {
        return typeof(SerializedSpecialValue);
	}

	public override string ResolveTypeId(Type type) {
		throw new NotImplementedException();
	}
}
