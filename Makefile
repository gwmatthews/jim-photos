all: index.html about.html
	echo All files are now up to date

clean: 
	rm -f *.html 

%.html: %.Rmd
	Rscript -e 'rmarkdown::render("$<")'

thumb:
	thumbsup --config "./config.json"
