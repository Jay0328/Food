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