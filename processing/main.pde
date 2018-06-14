ArrayList <Drop> fall = new ArrayList();
ArrayList <Center> centers = new ArrayList();

void setup()
{
  size(360, 540);
  noStroke();
  
  centers.add(new Center(180,60,80));
  centers.add(new Center(180,530,80));
  centers.add(new Center(120,220,65));
  centers.add(new Center(150,330,60));
  centers.add(new Center(80,430,70));
  centers.add(new Center(260,150,60));
  centers.add(new Center(230,250,60));
  centers.add(new Center(250,370,70));
  centers.add(new Center(300,450,60));
}

void draw()
{
  fill(255, 100);
  noStroke();
  rect(0, 0, width, height);
  
 
  //if(fall.size()<500)
  {
    for (int i=0; i<5; i++)
    {
      fall.add(new Drop(random(centers.get(0).location.x-50,centers.get(0).location.x+50), centers.get(0).location.y, color( 50, random(150, 200), random(200, 255))));
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
    if (fall.get(i).y > 530)
    {
      fall.remove(i);
    }
  }

}