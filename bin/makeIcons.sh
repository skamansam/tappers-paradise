#!/bin/sh
# see https://gist.github.com/Lerg/b0a643a13f751747976f
# https://icons8.com/articles/choosing-the-right-size-and-format-for-icons/
sizes="20x1 20x2 20x3 29x1 29x2 29x3 40x1 40x2 40x3 60x2 60x3 76x1 76x2 83.5x2 1024x1"
source=${1:-logo.svg}
dst=${2:-.}
for s in $sizes;do
  size=${s%x*}
  scale=${s##*x}
  resize=$(bc <<< ${size}*${scale} )
  convert -resize ${resize}x${resize} -unsharp 1x4 -background none "$source" $dst/"Icon-App-${size}x${size}@${scale}x.png"
done
