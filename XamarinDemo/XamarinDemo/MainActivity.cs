using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using Android.Graphics;
using System.Threading.Tasks;
using System.Net;
using System.IO;


namespace XamarinDemo
{
	[Activity (Label = "XamarinDemo", MainLauncher = true, Icon = "@drawable/icon")]
	public class MainActivity : Activity
	{

		private void InitBorder(int viewResourceId, Color color, int triangleLength = 0){
			var view = FindViewById (viewResourceId);
			view.SetBackgroundDrawable (new BorderWithPoint (view, color, triangleLength));
		}

		private void InitBorders(){
			const int triangleLength = 35;
			var blue = new Color (38, 160, 218);
			var grey = new Color (146, 148, 151);
			InitBorder(Resource.Id.tripDetailsContainer, blue, triangleLength);
			InitBorder(Resource.Id.contactPersonContainer, blue, triangleLength);
			InitBorder(Resource.Id.paymentDetailsContainer, blue, triangleLength);
			InitBorder(Resource.Id.timeContainer, blue, triangleLength);
			InitBorder(Resource.Id.noteToDriverContainer, grey, triangleLength);
			InitBorder(Resource.Id.etaContainer, blue);
			InitBorder(Resource.Id.dollarContainer, blue);
			InitBorder(Resource.Id.fareQuoteContainer, blue);
			InitBorder(Resource.Id.etaContainer, blue, triangleLength);
		}

		private void Back ()
		{
			new AlertDialog.Builder (this)
				.SetMessage ("There's no going back!")
				.SetTitle ("Back")
				.SetNeutralButton("OK", (sender, e) => {})
				.Show ();
		}

		private string creditCardValue;
		private void CreditCardOnFocus(EditText creditCard){
			creditCard.Text = creditCardValue;
		}

		private void CreditCardOnLooseFocus(EditText creditCard){
			creditCardValue = creditCard.Text;
			if (creditCardValue.Length > 4) {
				creditCard.Text = "**** " + creditCardValue.Substring (creditCardValue.Length - 4);
			}
		}

		private async Task<string> FetchIP(){
			var request = (HttpWebRequest)WebRequest.Create (new Uri ("http://api.ipify.org/"));
			request.Method = "GET";

			using (var response = await request.GetResponseAsync ()) {
				using (var stream = response.GetResponseStream ()) {
					using(var streamReader = new StreamReader(stream)){
						return await streamReader.ReadToEndAsync ();
					}
				}
			}
		}

		private async void OrderDriver(){
			var ip = await FetchIP();
			new AlertDialog.Builder (this)
				.SetMessage ("But your IP is: " + ip)
				.SetTitle ("Nо Drivers Left")
				.SetNeutralButton("OK", (sender, e) => {})
				.Show ();
		}

		protected override void OnCreate (Bundle savedInstanceState)
		{
			base.OnCreate (savedInstanceState);

			// Set our view from the "main" layout resource
			SetContentView (Resource.Layout.Main);

			var backButton = FindViewById<ImageButton> (Resource.Id.backButton);
			backButton.Click += (object sender, EventArgs e) => Back();

			var creditCard = FindViewById<EditText> (Resource.Id.creditCard);
			creditCard.FocusChange += (object sender, View.FocusChangeEventArgs e) => {
				if(e.HasFocus)
					CreditCardOnFocus(creditCard);
				else
					CreditCardOnLooseFocus(creditCard);
			}; 

			var orderDriverButton = FindViewById<Button>(Resource.Id.orderDriverButton);
			orderDriverButton.Click += (object sender, EventArgs e) => OrderDriver();

			InitBorders ();
		}
				
	}
}


