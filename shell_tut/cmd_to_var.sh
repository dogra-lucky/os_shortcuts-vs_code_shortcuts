#!/bin/bash
# ls
#ls_var=${ls}
#echo ${ls_var}

read -p "enter file name " fil
fil=${fil:-Pawan}
echo "file name is ${fil^^}"