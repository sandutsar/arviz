(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("fb56be7d-6785-4c29-8368-be4859fa52a7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fb56be7d-6785-4c29-8368-be4859fa52a7' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"9f3d6d1b-8e87-4f62-a969-93d059f39fbb":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21579","type":"BasicTicker"},{"attributes":{"end":6.616936585811742,"start":-2.830364555554647},"id":"21620","type":"Range1d"},{"attributes":{"data_source":{"id":"21610"},"glyph":{"id":"21611"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21612"},"view":{"id":"21614"}},"id":"21613","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"21641"},{"id":"21639"}]},"id":"21642","type":"Column"},{"attributes":{},"id":"21587","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[318]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[318]}},"selected":{"id":"21635"},"selection_policy":{"id":"21634"}},"id":"21610","type":"ColumnDataSource"},{"attributes":{},"id":"21583","type":"BasicTicker"},{"attributes":{},"id":"21634","type":"UnionRenderers"},{"attributes":{},"id":"21632","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"0fbP5W2W8D9j6t4M4oTwP+RFovfqmvA/4vlrxnWb8D/0gg5kBN3wPy419xraOvE/5nod1Zur8T/mqHmlnMvxP1TywAsSN/I/Gw3Ww43P8j/kC1FTTvzyP1q8YJnDgPM/5G4oAQAt9D+BRIqQx1P0P+27OHquUvU/6NH/rrFd9T9h5m83ymT2P+g011xjjvY/oa0DeJGA9z/ol64KFb/3P+NTO2i8y/g/6PqFuMbv+D/oXV1meCD6P+VIN5psSPo/6MA0FCpR+z9wzqa4h7b7P+gjDMLbgfw/6T+bnfhM/T/ohuNvjbL9P+jpuh0/4/4/D5S7uZJL/z90Jsll+AkAQPTXtDxRogBAbBoGOsMjAUB0iaATqjoBQPQ6jOoC0wFAdOx3wVtrAkD0nWOYtAMDQHRPT28NnANA9AA7RmY0BEB2siYdv8wEQPZjEvQXZQVAdhX+ynD9BUA2tGY7yxcGQPbG6aHJlQZAdXjVeCIuB0AjgyqE/S4HQA6jfglSmgdA9inBT3vGB0C2xfcGy/8HQABRaa7UQQhAqpq4CT5aCECTEf9qOl4IQBovaUuRVQhAlgu0EVBKCEATEA9QFDkIQKqGpIqGEghA0YOVs5/RB0D1KcFPe8YHQCeoHDmdggdAdnjVeCIuB0DUD0ka5dQGQPbG6aHJlQZAXKcqnnNwBkB2Ff7KcP0FQH6EjeIN/QVAmH/OnfSIBUD2YxL0F2UFQPgQbcw1EAVAdrImHb/MBEA8lAdapogEQPQAO0ZmNARAQpbdQ4zrA0B0T09vDZwDQIC55T1BNQNA9J1jmLQDA0B07HfBW2sCQIiCdSQWWAJA9DqM6gLTAUBSrJJXUUoBQHSJoBOqOgFA9Ne0PFGiAEB0Jsll+AkAQOOPs/K81v8/6Om6HT/j/j/ohuNvjbL9P+gjDMLbgfw/IhbRDGkq/D/owDQUKlH7P+ldXWZ4IPo/6PqFuMbv+D/ol64KFb/3P+g011xjjvY/9kC1EuRX9j/o0f+usV31P+RuKAEALfQ/CMuuy1XN8z/kC1FTTvzyP4ds7KitefI/5qh5pZzL8T8f8EsmMq/xPwy/Az+HKvE/mjaZYZXW8D9xWEpUZLLwP+RFovfqmvA/0fbP5W2W8D8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"vqJ7XhEt+j900bXT+kb7P7VLEZSQWvw/MADwSORg/D/oLiq+zXr9P6BdZDO3lP4/WIyeqKCu/z+Dd6v8be7/P4hd7A5FZABA5HSJyTnxAEBcZ47VZxYBQECMJoQufgFAe5d96NbyAUCco8M+IwsCQPe6YPkXmAJAg+mfve2dAkBW0v2zDCUDQIaGWrQvOwNAsumabgGyA0Bk8+R5288DQA4BOCn2PgRAr2t6aq1MBEC+v4vXXbwEQGoY1ePqywRA/z3OLp4yBUDGL3Ke31gFQGNIZy4opQVAIkcPWdTlBUBajpi9BwUGQAzNmgDhWAZAfl6sE8lyBkAQL2YmMKQGQAG7nSc+3wZA2nVJzr3/BkC8UAYUQQUHQO+mD7e0IQdApKIzT3Q8B0CSFrcivlAHQBy3O+0wXgdASQb9XqViB0BMvAFev1UHQCef0AT0NAdABnxb2xAIB0DadUnOvf8GQMSlzBG31AZAqC0zOZJzBkB+XqwTyXIGQCJHD1nU5QVAJvTIaHasBUDGL3Ke31gFQGoY1ePqywRADgE4KfY+BECy6ZpuAbIDQFbS/bMMJQNA+Lpg+ReYAkCco8M+IwsCQECMJoQufgFA5HSJyTnxAEASMrx8St0AQIhd7A5FZABAWIyeqKCu/z+gXWQzt5T+P7i+1Aha5P0/6C4qvs16/T8JEUfm5WH8PzAA8EjkYPw/dNG10/pG+z9jlCKxjfb6P76ie14RLfo/TV8Nd1id+T8EdEHpJxP5P6tz3wF7dPg/TEUHdD759z+TF6SlJnf3P5QWzf5U3/Y/dk2UPr6Y9j+enlgXEdr1P9znkolrxfU/iCiMResz9T8juVgUgqv0P8gdNlRLm/Q/CCITU5cW9D+065eaMKnzP2qKHp+YkfM/vnxwFUE08z+Zxf4bM8HyP09QyCaXe/I/slvkKa938j9rRbnRHG3yP3ZGTHvuZPI/5BA0BJ9P8j9kVmEb2ULyPxs1qnURZ/I/slvkKa938j8KBVDkGtLyPx+PV5DIV/M/aooen5iR8z+2H2ob3yr0PyS5WBSCq/Q/tmEj3piW9T/c55KJa8X1P5QWzf5U3/Y/TEUHdD759z8EdEHpJxP5P2RipGXL/fk/vqJ7XhEt+j8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"21637"},"selection_policy":{"id":"21636"}},"id":"21615","type":"ColumnDataSource"},{"attributes":{},"id":"21624","type":"BasicTickFormatter"},{"attributes":{},"id":"21626","type":"AllLabels"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21607","type":"Patch"},{"attributes":{},"id":"21637","type":"Selection"},{"attributes":{"end":6.385007825363257,"start":-2.3559142973237526},"id":"21621","type":"Range1d"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21616","type":"Patch"},{"attributes":{"source":{"id":"21605"}},"id":"21609","type":"CDSView"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21606","type":"Patch"},{"attributes":{"toolbar":{"id":"21640"},"toolbar_location":"above"},"id":"21641","type":"ToolbarBox"},{"attributes":{},"id":"21635","type":"Selection"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21611","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21594","type":"BoxAnnotation"},{"attributes":{},"id":"21574","type":"LinearScale"},{"attributes":{},"id":"21589","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"21605"},"glyph":{"id":"21606"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21607"},"view":{"id":"21609"}},"id":"21608","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"21578"},"grid_line_color":null,"ticker":null},"id":"21581","type":"Grid"},{"attributes":{"source":{"id":"21610"}},"id":"21614","type":"CDSView"},{"attributes":{},"id":"21586","type":"ResetTool"},{"attributes":{},"id":"21576","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21612","type":"Patch"},{"attributes":{"overlay":{"id":"21595"}},"id":"21590","type":"LassoSelectTool"},{"attributes":{},"id":"21633","type":"Selection"},{"attributes":{"toolbars":[{"id":"21596"}],"tools":[{"id":"21586"},{"id":"21587"},{"id":"21588"},{"id":"21589"},{"id":"21590"},{"id":"21591"},{"id":"21592"},{"id":"21593"}]},"id":"21640","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"21582"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21585","type":"Grid"},{"attributes":{"formatter":{"id":"21627"},"major_label_policy":{"id":"21629"},"ticker":{"id":"21583"}},"id":"21582","type":"LinearAxis"},{"attributes":{"data_source":{"id":"21615"},"glyph":{"id":"21616"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21617"},"view":{"id":"21619"}},"id":"21618","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"21586"},{"id":"21587"},{"id":"21588"},{"id":"21589"},{"id":"21590"},{"id":"21591"},{"id":"21592"},{"id":"21593"}]},"id":"21596","type":"Toolbar"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21617","type":"Patch"},{"attributes":{},"id":"21623","type":"Title"},{"attributes":{},"id":"21591","type":"UndoTool"},{"attributes":{},"id":"21636","type":"UnionRenderers"},{"attributes":{},"id":"21627","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"21569"},0,0]]},"id":"21639","type":"GridBox"},{"attributes":{},"id":"21629","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21595","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"21593","type":"HoverTool"},{"attributes":{"overlay":{"id":"21594"}},"id":"21588","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"21624"},"major_label_policy":{"id":"21626"},"ticker":{"id":"21579"}},"id":"21578","type":"LinearAxis"},{"attributes":{},"id":"21592","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]}},"selected":{"id":"21633"},"selection_policy":{"id":"21632"}},"id":"21605","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"21578"}],"center":[{"id":"21581"},{"id":"21585"}],"height":500,"left":[{"id":"21582"}],"output_backend":"webgl","renderers":[{"id":"21608"},{"id":"21613"},{"id":"21618"}],"title":{"id":"21623"},"toolbar":{"id":"21596"},"toolbar_location":null,"width":500,"x_range":{"id":"21620"},"x_scale":{"id":"21574"},"y_range":{"id":"21621"},"y_scale":{"id":"21576"}},"id":"21569","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"21615"}},"id":"21619","type":"CDSView"}],"root_ids":["21642"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"9f3d6d1b-8e87-4f62-a969-93d059f39fbb","root_ids":["21642"],"roots":{"21642":"fb56be7d-6785-4c29-8368-be4859fa52a7"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();