using System;
using Android.Graphics.Drawables;
using Android.Graphics.Drawables.Shapes;
using Android.Graphics;
using Android.App;
using Java.Util.Logging;
using Android.Views;

namespace XamarinDemo
{
	public class BorderWithPoint : ShapeDrawable
	{
		private readonly View view;
		private readonly int triangleLength;
		private readonly Color color;

		public BorderWithPoint(View view, Color color, int triangleLength = 0){
			this.view = view;
			this.triangleLength = triangleLength;
			this.color = color;
		}

		public override void Draw(Canvas canvas){
			base.Draw(canvas);
			var width = view.Width;
			var height = view.Height;

			// Create background - will turn into border
			canvas.DrawRect (0, 0, width, height, new Paint () {Color = color});

			// Create triangle
			var points = new[] {
				new PointF (1, 1),
				new PointF (1, height - 1),
				new PointF (width - triangleLength, height - 1),
				new PointF (width - 1, height - triangleLength),
				new PointF (width - 1 , 1),
				new PointF (1, 1)
			};
			var path = new Path ();
			path.MoveTo (points [0].X, points[0].Y);
			for (var i = 1; i < points.Length; i++) {
				path.LineTo (points [i].X, points [i].Y);
			}

			var white = new Paint {
				Color = Color.White
			};
			white.SetStyle (Paint.Style.Fill);
			canvas.DrawPath (path, white);
		}
	}
}

