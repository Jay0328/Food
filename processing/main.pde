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

ArrayList <Drop> fall = new ArrayList();
ArrayList <Center> centers = new ArrayList();

void setup()
{
  size(640, 640);
  noStroke();
  
  centers.add(new Center(300,130,100));
  centers.add(new Center(300,430,100));
}

void draw()
{
  fill(0, 100);
  rect(0, 0, width, height);
  
 
  //if(fall.size()<500)
  {
    for (int i=0; i<5; i++)
    {
      fall.add(new Drop(random(centers.get(0).location.x-50,centers.get(0).location.x+50), centers.get(0).location.y, color(random(50, 200), 200, 255)));
    }
  }

  for (int i=0; i<fall.size(); i++)
  {
    fall.get(i).run();
    
  }
  
  for (int i=0; i<centers.size (); i++)
  {
    centers.get(i).run();
  }
  
  for (int i=0; i<fall.size(); i++)
  {
    if (fall.get(i).y > 430)
    {
      fall.remove(i);
    }
  }

}