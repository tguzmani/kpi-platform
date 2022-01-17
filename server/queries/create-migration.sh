folder=migration-$1
filename=$folder.sql

if [ -d $folder ]; then
    if [ -f $folder/$filename ]; then
        rm -f $folder/$filename
    fi

    find migration-$1 -maxdepth 1 -name "*.sql" -exec cat {} >> $filename +
    mv $filename $folder/$filename

    echo "Migración $filename creada con éxito"

else
    echo "La migración $1 no ha sido encontrada"
fi
