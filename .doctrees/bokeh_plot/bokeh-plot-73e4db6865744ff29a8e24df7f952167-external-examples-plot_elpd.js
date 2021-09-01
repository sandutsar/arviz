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
    
      
      
    
      var element = document.getElementById("24c0cb15-ef31-4aa1-840b-d8513edcb324");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '24c0cb15-ef31-4aa1-840b-d8513edcb324' but no matching script tag was found.")
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
                    
                  var docs_json = '{"bbfde8bb-4d87-4113-8bd3-b528149e623e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18487","type":"DataRange1d"},{"attributes":{},"id":"18502","type":"PanTool"},{"attributes":{"below":[{"id":"18493"}],"center":[{"id":"18496"},{"id":"18500"}],"height":288,"left":[{"id":"18497"}],"output_backend":"webgl","renderers":[{"id":"18522"}],"title":{"id":"18524"},"toolbar":{"id":"18511"},"toolbar_location":null,"width":432,"x_range":{"id":"18485"},"x_scale":{"id":"18489"},"y_range":{"id":"18487"},"y_scale":{"id":"18491"}},"id":"18484","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"18540"},{"id":"18538"}]},"id":"18541","type":"Column"},{"attributes":{},"id":"18529","type":"AllLabels"},{"attributes":{},"id":"18527","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"18511"}],"tools":[{"id":"18501"},{"id":"18502"},{"id":"18503"},{"id":"18504"},{"id":"18505"},{"id":"18506"},{"id":"18507"},{"id":"18508"}]},"id":"18539","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"18508","type":"HoverTool"},{"attributes":{"axis":{"id":"18497"},"dimension":1,"ticker":null},"id":"18500","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"18520","type":"Scatter"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"18530"},"major_label_policy":{"id":"18532"},"ticker":{"id":"18498"}},"id":"18497","type":"LinearAxis"},{"attributes":{},"id":"18530","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18527"},"major_label_policy":{"id":"18529"},"ticker":{"id":"18494"}},"id":"18493","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18510","type":"PolyAnnotation"},{"attributes":{},"id":"18507","type":"SaveTool"},{"attributes":{"overlay":{"id":"18510"}},"id":"18505","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"18539"},"toolbar_location":"above"},"id":"18540","type":"ToolbarBox"},{"attributes":{},"id":"18506","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18501"},{"id":"18502"},{"id":"18503"},{"id":"18504"},{"id":"18505"},{"id":"18506"},{"id":"18507"},{"id":"18508"}]},"id":"18511","type":"Toolbar"},{"attributes":{"data_source":{"id":"18521"},"glyph":{"id":"18520"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18523"}},"id":"18522","type":"GlyphRenderer"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"18536"},"selection_policy":{"id":"18535"}},"id":"18521","type":"ColumnDataSource"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"18524","type":"Title"},{"attributes":{"axis":{"id":"18493"},"ticker":null},"id":"18496","type":"Grid"},{"attributes":{},"id":"18535","type":"UnionRenderers"},{"attributes":{},"id":"18485","type":"DataRange1d"},{"attributes":{},"id":"18498","type":"BasicTicker"},{"attributes":{},"id":"18491","type":"LinearScale"},{"attributes":{},"id":"18532","type":"AllLabels"},{"attributes":{},"id":"18536","type":"Selection"},{"attributes":{"overlay":{"id":"18509"}},"id":"18503","type":"BoxZoomTool"},{"attributes":{},"id":"18504","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"18484"},0,0]]},"id":"18538","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18509","type":"BoxAnnotation"},{"attributes":{"source":{"id":"18521"}},"id":"18523","type":"CDSView"},{"attributes":{},"id":"18501","type":"ResetTool"},{"attributes":{},"id":"18489","type":"LinearScale"},{"attributes":{},"id":"18494","type":"BasicTicker"}],"root_ids":["18541"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"bbfde8bb-4d87-4113-8bd3-b528149e623e","root_ids":["18541"],"roots":{"18541":"24c0cb15-ef31-4aa1-840b-d8513edcb324"}}];
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