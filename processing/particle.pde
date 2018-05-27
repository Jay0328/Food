class Drop
{
  float x;
  float y;
  float vx, vy;
  float g;
  color c;

  Drop(float _x, float _y, color _c)
  {
    x = _x;
    y = _y;
    vx = random(-0.2, 0.2);//sin(radians(random(-90, 90)))/4;
    vy = 2;
    c = _c;
    g = 0.05; 

  }

  void run()
  {
    y += vy;
    x += vx;
    vy += g;
    noStroke();
    fill(c);
    ellipse( x, y, 3, 3);
    
  }

  void removeDrop()
  {
    for (int i=0; i<fall.size(); i++)
    {
      float d = dist( fall.get(i).x, centers.get(1).location.x,fall.get(i).y, centers.get(1).location.y);
      if (d < 100)
      {
        fall.remove(i);
      }
    }
   
  }
}