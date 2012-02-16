newCount=`wc -l $1 | sed 's/\([0-9]*\).*/\1/'`
diff=$(( newCount - lastCount ))
rate=$(echo "$diff / 1" |bc -l)
echo $rate
