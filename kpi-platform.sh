option=$1
kpi_dir=~/kpi-platform

case $1 in
  -b)
    cd $kpi_dir/client
    bash build.sh
    ;;

  -d)
    cd $kpi_dir
    ;;

  -p)
    cd $kpi_dir
    git pull
    ;;

  -r)
    cd $kpi_dir/server
    screen -s server npm run server
    ;;

  -t)
    screen -X -S server quit
    ;;

  -w)
    screen -r server
    ;;

  -h)
    echo -e '-b \t build frontend'
    echo -e '-d \t goto directory'
    echo -e '-p \t make git pull request'
    echo -e '-r \t run server'
    echo -e '-t \t stop server'
    echo -e '-w \t show server status'
    ;;
  
  *)
    echo USAGE: kpi-platform [OPTION]
    echo Options available via kpi-platform -h
    ;;
esac
