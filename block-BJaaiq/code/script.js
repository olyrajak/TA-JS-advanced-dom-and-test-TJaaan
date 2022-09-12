(function() {
    let root = document.querySelector("ul");

    const limit = 5;
    const totalQuotes = quotes.length;
    let index = 0;

    function addQuotes() {
        if (index >= totalQuotes) {
            alert("Quotes is Empty");
            return;
        }
        for (i = 0; i < limit; i++) {
            let li = document.createElement("li");
            let blockquote = document.createElement("blockquote");
            let cite = document.createElement("cite");
            blockquote.innerText = quotes[index].quoteText;
            cite.innerText = quotes[index].quoteAuthor;
            li.append(blockquote, cite);
            root.append(li);
            index++;
        }
    }

    window.addEventListener(
        "scroll",
        () => {
            const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5) {
                addQuotes();
            }
        }, {
            passive: true,
        }
    );
    addQuotes(0);
})();