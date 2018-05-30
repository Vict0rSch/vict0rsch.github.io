function mySearch(_query) {
    var results = [];
    const query = _query.toLowerCase()
    var pushed;
    for (var idx in window.store) {
        pushed = false;
        const element = window.store[idx];

        const title = element.title;
        if (title && title.toLowerCase().indexOf(query) > -1) {
            results.push(
                {
                    ref: idx,
                    score: 4
                }
            )
            pushed = true;
        }

        const subtitle = element.subtitle;

        if (subtitle && subtitle.toLowerCase().indexOf(query) > -1) {
            if (!pushed) {
                results.push(
                    {
                        ref: idx,
                        score: 2
                    }
                )
                pushed = true;
            } else {
                results[results.length - 1].score += 2
            }

        }

        const tags = element.tags.split(', ');
        console.log(element, element.tags);
        for (var w in tags) {
            if (tags[w].toLowerCase().indexOf(query) > -1) {
                if (!pushed) {
                    results.push(
                        {
                            ref: idx,
                            score: 3
                        }
                    )
                    pushed = true;
                } else {
                    results[results.length - 1].score += 3
                }
            }
        }

        const excerpt = element.excerpt;
        if (excerpt && excerpt.toLowerCase().indexOf(query) > -1) {
            if (!pushed) {
                results.push(
                    {
                        ref: idx,
                        score: 1
                    }
                )
            } else {
                results[results.length - 1].score += 1
            }
        }


    }
    resutls = results.sort(function (a, b) {
        return b.score - a.score
    })
    return results
}

function doSearch(query) {
    console.log('doSearch: ', query);
    $('#results-container').html('');
    if ($.trim(query)) {
        // const result = index.search('*' + query + '*');
        const result = mySearch(query);
        console.log(result);
        console.log('result', result);
        updateUrlParameter(query)
        showResults(result)
    } else {
        updateUrlParameter('')
    }
}

function showResults(result) {
    for (var itemIx in result) {
        const item = result[itemIx]
        const ref = item.ref
        const post = window.store[parseInt(ref, 10)];
        var searchitem = $('<div class="searchitem"></div>');
        searchitem = $(searchitem).add(getTemplate(post));
        searchitem.appendTo('#results-container');
    }
}

function getTemplate(item) {

    var el = $('<li></li>');
    var a = $('<a></a>')
    $(a).attr('href', item.url)
    $(a).text(item.title)
    el = $(el).append(a)
    if (item.date) {
        el = $(el).append($("<span class='search-date'>" + item.date + "</span>"))
    }
    var p = $('<p></p>');
    const sub = $.trim(item.subtitle);
    const ex = $.trim(item.excerpt);
    if (sub) {
        p = $(p).append($("<span class='search-subtitle'>" + item.subtitle + "</span>"))
    }
    if (sub && ex) {
        p = $(p).append($("<br/>"))
    }
    if (ex) {
        p = $(p).append($("<span class='search-excerpt'>" + item.excerpt + "</span>"))
    }

    if (sub || ex) {
        el = $(el).append(p)
    }
    return el

}
function updateUrlParameter(value) {
    window.history.pushState('', '', '?s=' + encodeURIComponent(value));
}

function getQuery() {
    const parser = document.createElement('a')
    parser.href = window.location.href
    console.log('Initial query');
    if (parser.href.includes('=')) {
        const searchquery = decodeURIComponent(parser.href.substring(parser.href.indexOf('=') + 1))
        console.log('searchquery', searchquery);
        $('#search-input').val(searchquery);
        doSearch(searchquery)
    }

}



$('document').ready(function () {
    $.getJSON("/search.json", function (data) {

        window.store = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                if (element.title) {
                    window.store.push(element)
                }
            }
        }

        console.log(data);

        var index = lunr(function () {
            this.ref('id');
            this.field('title', { boost: 3 });
            this.field('subtitle', { boost: 2 });
            this.field('excerpt');
            this.field('tags', { boost: 3 });
            this.field('url');
            for (var key in window.store) {
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'subtitle': window.store[key].subtitle,
                    'excerpt': window.store[key].excerpt,
                    'date': window.store[key].date,
                    'tags': window.store[key].tags,
                    'url': window.store[key].url,
                });
            }
        });

        getQuery();

        $('#search-input').keyup(function (event) {
            event.preventDefault()
            const query = $(this).val()
            console.log('Keyup: query', query);
            doSearch(query);
        })
    });

});