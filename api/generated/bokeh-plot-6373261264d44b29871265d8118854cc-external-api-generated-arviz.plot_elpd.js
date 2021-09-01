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
    
      
      
    
      var element = document.getElementById("ba119ad5-3d44-49f6-b5af-2e85260dc59a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ba119ad5-3d44-49f6-b5af-2e85260dc59a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e1b8be91-37e2-4fe9-b274-21197d685875":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"15241"},0,0]]},"id":"15295","type":"GridBox"},{"attributes":{"source":{"id":"15278"}},"id":"15280","type":"CDSView"},{"attributes":{"axis":{"id":"15254"},"dimension":1,"ticker":null},"id":"15257","type":"Grid"},{"attributes":{},"id":"15289","type":"AllLabels"},{"attributes":{"below":[{"id":"15250"}],"center":[{"id":"15253"},{"id":"15257"}],"height":288,"left":[{"id":"15254"}],"output_backend":"webgl","renderers":[{"id":"15279"}],"title":{"id":"15281"},"toolbar":{"id":"15268"},"toolbar_location":null,"width":432,"x_range":{"id":"15242"},"x_scale":{"id":"15246"},"y_range":{"id":"15244"},"y_scale":{"id":"15248"}},"id":"15241","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"15250"},"ticker":null},"id":"15253","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15266","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"15284"},"major_label_policy":{"id":"15286"},"ticker":{"id":"15251"}},"id":"15250","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"15293"},"selection_policy":{"id":"15292"}},"id":"15278","type":"ColumnDataSource"},{"attributes":{},"id":"15284","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"15277","type":"Scatter"},{"attributes":{},"id":"15255","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15265","type":"HoverTool"},{"attributes":{},"id":"15242","type":"DataRange1d"},{"attributes":{},"id":"15261","type":"WheelZoomTool"},{"attributes":{},"id":"15259","type":"PanTool"},{"attributes":{},"id":"15246","type":"LinearScale"},{"attributes":{},"id":"15264","type":"SaveTool"},{"attributes":{"active_multi":null,"tools":[{"id":"15258"},{"id":"15259"},{"id":"15260"},{"id":"15261"},{"id":"15262"},{"id":"15263"},{"id":"15264"},{"id":"15265"}]},"id":"15268","type":"Toolbar"},{"attributes":{},"id":"15292","type":"UnionRenderers"},{"attributes":{},"id":"15244","type":"DataRange1d"},{"attributes":{},"id":"15248","type":"LinearScale"},{"attributes":{},"id":"15287","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"15296"},"toolbar_location":"above"},"id":"15297","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"15278"},"glyph":{"id":"15277"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"15280"}},"id":"15279","type":"GlyphRenderer"},{"attributes":{},"id":"15251","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15267","type":"PolyAnnotation"},{"attributes":{"text":"centered model - non centered model"},"id":"15281","type":"Title"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"15287"},"major_label_policy":{"id":"15289"},"ticker":{"id":"15255"}},"id":"15254","type":"LinearAxis"},{"attributes":{"overlay":{"id":"15267"}},"id":"15262","type":"LassoSelectTool"},{"attributes":{},"id":"15286","type":"AllLabels"},{"attributes":{},"id":"15258","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"15268"}],"tools":[{"id":"15258"},{"id":"15259"},{"id":"15260"},{"id":"15261"},{"id":"15262"},{"id":"15263"},{"id":"15264"},{"id":"15265"}]},"id":"15296","type":"ProxyToolbar"},{"attributes":{},"id":"15293","type":"Selection"},{"attributes":{"overlay":{"id":"15266"}},"id":"15260","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"15297"},{"id":"15295"}]},"id":"15298","type":"Column"},{"attributes":{},"id":"15263","type":"UndoTool"}],"root_ids":["15298"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"e1b8be91-37e2-4fe9-b274-21197d685875","root_ids":["15298"],"roots":{"15298":"ba119ad5-3d44-49f6-b5af-2e85260dc59a"}}];
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