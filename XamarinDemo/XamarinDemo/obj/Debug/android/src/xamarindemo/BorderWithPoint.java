package xamarindemo;


public class BorderWithPoint
	extends android.graphics.drawable.ShapeDrawable
	implements
		mono.android.IGCUserPeer
{
	static final String __md_methods;
	static {
		__md_methods = 
			"n_draw:(Landroid/graphics/Canvas;)V:GetDraw_Landroid_graphics_Canvas_Handler\n" +
			"";
		mono.android.Runtime.register ("XamarinDemo.BorderWithPoint, XamarinDemo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", BorderWithPoint.class, __md_methods);
	}


	public BorderWithPoint () throws java.lang.Throwable
	{
		super ();
		if (getClass () == BorderWithPoint.class)
			mono.android.TypeManager.Activate ("XamarinDemo.BorderWithPoint, XamarinDemo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "", this, new java.lang.Object[] {  });
	}


	public BorderWithPoint (android.graphics.drawable.shapes.Shape p0) throws java.lang.Throwable
	{
		super (p0);
		if (getClass () == BorderWithPoint.class)
			mono.android.TypeManager.Activate ("XamarinDemo.BorderWithPoint, XamarinDemo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "Android.Graphics.Drawables.Shapes.Shape, Mono.Android, Version=0.0.0.0, Culture=neutral, PublicKeyToken=84e04ff9cfb79065", this, new java.lang.Object[] { p0 });
	}


	public void draw (android.graphics.Canvas p0)
	{
		n_draw (p0);
	}

	private native void n_draw (android.graphics.Canvas p0);

	java.util.ArrayList refList;
	public void monodroidAddReference (java.lang.Object obj)
	{
		if (refList == null)
			refList = new java.util.ArrayList ();
		refList.add (obj);
	}

	public void monodroidClearReferences ()
	{
		if (refList != null)
			refList.clear ();
	}
}
