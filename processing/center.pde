class Center
{
  PVector location = new PVector();
  float r;

  Center(float _x, float _y, float _r)
  {
    location.x = _x;
    location.y = _y;
    r = _r;
  }

  void run()
  {
    fill(0);
    stroke(255);
    strokeWeight(2);
    ellipse(location.x,location.y, r, r);
  }

}