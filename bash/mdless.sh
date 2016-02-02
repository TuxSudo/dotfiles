# preview markdown files in the terminal
# requires install of pandoc
function mdless(){
	if [ -z "${1}" ]; then
		echo "Usage: mdless <markdown-file.md>";
		return 1;
	fi;

	pandoc -s -f markdown -t man "$1" | groff -T utf8 -man | less;
}
