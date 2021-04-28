function hasCollided(lbullet,lwall){

  bulletRightEdge = lbullet.x + bullet.width;
  wallLeftEdge = lwall.x;
 if( bulletRightEdge>=wallLeftEdge ){
   
    return true;
 }
    return false;

}