// Generated by CoffeeScript 1.6.3
(function() {
  App.templates = {
    dropdown: CoffeeKup.compile(function() {
      header({
        "class": 'dropdown-header'
      }, function() {
        return p(function() {
          return "Recent Articles";
        });
      });
      div({
        "class": 'dropdown-columns'
      }, function() {
        var article, i, _i, _len, _ref, _results;
        _ref = data.articles;
        _results = [];
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          article = _ref[i];
          if (i > 2) {
            break;
          }
          _results.push(div({
            "class": 'dropdown-column'
          }, function() {
            var d;
            div({
              "class": 'article-snippet-image',
              'style': "background-image: url('" + article.image + "')"
            }, function() {});
            a({
              "class": 'article-link',
              href: "article/" + article.uid
            }, function() {
              return h2({
                "class": 'snippet-title'
              }, function() {
                return article.title;
              });
            });
            if (article.authors.length) {
              p({
                "class": 'article-snippet-authors'
              }, function() {
                var author, _j, _len1, _ref1, _results1;
                text('by ');
                _ref1 = article.authors;
                _results1 = [];
                for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
                  author = _ref1[i];
                  _results1.push(span({
                    "class": 'article-snippet-author'
                  }, function() {
                    if (i === article.authors.length - 1) {
                      return "<a href='author/" + author + "'>" + author + "</a>";
                    } else if (i === article.authors.length - 2) {
                      return "<a href='author/" + author + "'>" + author + "</a> and ";
                    } else {
                      return "<a href='author/" + author + "'>" + author + "</a>, ";
                    }
                  }));
                }
                return _results1;
              });
            }
            if (article.category) {
              p({
                "class": 'article-snippet-tags'
              }, function() {
                return "Filed in " + (_.str.capitalize(article.category));
              });
            }
            if (article.date) {
              d = article.date.toString().split(' ');
              return p({
                "class": 'article-snippet-date'
              }, function() {
                return "" + d[0] + " " + d[1] + " " + d[2] + " " + d[3];
              });
            }
          }));
        }
        return _results;
      });
      return footer({
        "class": 'dropdown-footer'
      }, function() {
        var url;
        url = data.category === "featured" ? "" : "category/" + data.category;
        return a({
          "class": 'category-link',
          href: url
        }, function() {
          return p(function() {
            text("Read More in ");
            return span({
              "class": 'dropdown-category'
            }, function() {
              return _.str.capitalize(data.category);
            });
          });
        });
      });
    }),
    singleArticle: CoffeeKup.compile(function() {
      var art;
      art = data.article;
      return article(function() {
        header({
          "class": 'article-header'
        }, function() {
          div({
            "class": 'article-info'
          }, function() {
            a({
              "class": 'article-link',
              href: "article/" + art.uid
            }, function() {
              return h2({
                "class": 'article-title'
              }, function() {
                return art.title;
              });
            });
            p({
              "class": 'article-authors'
            }, function() {
              var author, i, _i, _len, _ref, _results;
              text('by ');
              _ref = art.authors;
              _results = [];
              for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                author = _ref[i];
                _results.push(span({
                  "class": 'article-snippet-author'
                }, function() {
                  if (i === art.authors.length - 1) {
                    return "<a href='author/" + author + "'>" + author + "</a>";
                  } else if (i === art.authors.length - 2) {
                    return "<a href='author/" + author + "'>" + author + "</a> and ";
                  } else {
                    return "<a href='author/" + author + "'>" + author + "</a>, ";
                  }
                }));
              }
              return _results;
            });
            return p({
              "class": 'article-date'
            }, function() {
              var d;
              d = art.date.toString().split(' ');
              return text("" + d[0] + " " + d[1] + " " + d[2] + " " + d[3]);
            });
          });
          return div({
            "class": 'article-image',
            style: "background-image: url( " + art.image + " );"
          });
        });
        section({
          "class": 'article-body'
        }, function() {
          if (!data.shorten) {
            return art.content;
          } else {
            return _(art.content).truncate(data.shorten);
          }
        });
        return footer({
          "class": 'article-footer'
        }, function() {});
      });
    }),
    categoryBanner: CoffeeKup.compile(function() {
      return div({
        "class": "category-banner category-banner-" + data.category,
        style: "background-image: url('" + data.image + "')"
      }, function() {
        return h2({
          "class": 'category-title'
        }, function() {
          text(_.str.capitalize(data.category));
          return span({
            "class": "category-title__subtitle"
          }, function() {
            return data.subtitle;
          });
        });
      });
    })
  };

}).call(this);
