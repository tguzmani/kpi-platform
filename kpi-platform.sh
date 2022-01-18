option=$1
kpi_dir=~/kpi-platform

case $1 in
  -b)
    cd $kpi_dir/client
    bash build.sh

  -p)
    cd $kpi_dir
    git pull

  -r)
    cd $kpi_dir/server
    screen -s server npm run server

  -t)
    screen -X -S server quit

  -w)
    screen -r server
    
  -h)
    echo -b \t build frontend
    echo -p \t make git pull request
    echo -r \t run server
    echo -t \t stop server
    echo -w \t show server status
  
  *)
    USAGE: kpi-platform [OPTION]
    Options available via kpi-platform -h

  
