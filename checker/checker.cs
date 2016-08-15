#pragma warning disable 0649

using System;
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
	static JavaScriptSerializer serializer = new JavaScriptSerializer();

	static Result Process(string[] args) {
        if (args == null || args.Length != 1) {
            return new Result { Error = "Invalid argument" };
        }
		Arg arg;
		try {
			arg = serializer.Deserialize<Arg>(args[0]);
		} catch {
			return new Result { Error = "Invalid JSON: " + args[0] };
		}
        try {
            var culture = arg.Culture == null ? CultureInfo.InvariantCulture : CultureInfo.GetCultureInfo(arg.Culture);
            //System.Threading.Thread.CurrentThread.CurrentCulture = culture;
		    return new Result { ReturnValue = String.Format(culture, arg.Format, arg.Args), Format = arg.Format };
        } catch (Exception e) {
            return new Result { Error = e.Message };
        }
	}

	public static void Main(string[] args) {
		Console.WriteLine(UnicodeEscape(serializer.Serialize(Process(args))));
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