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
    
      
      
    
      var element = document.getElementById("d45a2836-59e6-4352-9191-302f8d89dcf0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd45a2836-59e6-4352-9191-302f8d89dcf0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1bde6f3f-9cbd-4618-a1ec-2e833267de88":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"18966"},"glyph":{"id":"18967"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18968"},"view":{"id":"18970"}},"id":"18969","type":"GlyphRenderer"},{"attributes":{},"id":"18948","type":"PanTool"},{"attributes":{},"id":"18952","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"18957"}],"tools":[{"id":"18947"},{"id":"18948"},{"id":"18949"},{"id":"18950"},{"id":"18951"},{"id":"18952"},{"id":"18953"},{"id":"18954"}]},"id":"18994","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18975","type":"Span"},{"attributes":{},"id":"18933","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"18994"},"toolbar_location":"above"},"id":"18995","type":"ToolbarBox"},{"attributes":{"axis":{"id":"18939"},"ticker":null},"id":"18942","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18968","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18991"},"selection_policy":{"id":"18990"}},"id":"18972","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"18930"},0,0]]},"id":"18993","type":"GridBox"},{"attributes":{"active_multi":null,"tools":[{"id":"18947"},{"id":"18948"},{"id":"18949"},{"id":"18950"},{"id":"18951"},{"id":"18952"},{"id":"18953"},{"id":"18954"}]},"id":"18957","type":"Toolbar"},{"attributes":{"overlay":{"id":"18956"}},"id":"18951","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"18939"}],"center":[{"id":"18942"},{"id":"18946"}],"height":500,"left":[{"id":"18943"}],"output_backend":"webgl","renderers":[{"id":"18969"},{"id":"18973"},{"id":"18975"},{"id":"18976"}],"title":{"id":"18977"},"toolbar":{"id":"18957"},"toolbar_location":null,"width":500,"x_range":{"id":"18931"},"x_scale":{"id":"18935"},"y_range":{"id":"18933"},"y_scale":{"id":"18937"}},"id":"18930","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18931","type":"DataRange1d"},{"attributes":{},"id":"18940","type":"BasicTicker"},{"attributes":{"children":[{"id":"18995"},{"id":"18993"}]},"id":"18996","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18955","type":"BoxAnnotation"},{"attributes":{},"id":"18950","type":"WheelZoomTool"},{"attributes":{},"id":"18988","type":"UnionRenderers"},{"attributes":{},"id":"18983","type":"BasicTickFormatter"},{"attributes":{},"id":"18980","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18976","type":"Span"},{"attributes":{},"id":"18944","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18967","type":"Circle"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18971","type":"Scatter"},{"attributes":{},"id":"18990","type":"UnionRenderers"},{"attributes":{},"id":"18935","type":"LinearScale"},{"attributes":{"callback":null},"id":"18954","type":"HoverTool"},{"attributes":{},"id":"18982","type":"AllLabels"},{"attributes":{},"id":"18989","type":"Selection"},{"attributes":{"overlay":{"id":"18955"}},"id":"18949","type":"BoxZoomTool"},{"attributes":{},"id":"18953","type":"SaveTool"},{"attributes":{"source":{"id":"18972"}},"id":"18974","type":"CDSView"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18983"},"major_label_policy":{"id":"18985"},"ticker":{"id":"18944"}},"id":"18943","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18956","type":"PolyAnnotation"},{"attributes":{},"id":"18991","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18980"},"major_label_policy":{"id":"18982"},"ticker":{"id":"18940"}},"id":"18939","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18972"},"glyph":{"id":"18971"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18974"}},"id":"18973","type":"GlyphRenderer"},{"attributes":{},"id":"18947","type":"ResetTool"},{"attributes":{},"id":"18985","type":"AllLabels"},{"attributes":{},"id":"18937","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18989"},"selection_policy":{"id":"18988"}},"id":"18966","type":"ColumnDataSource"},{"attributes":{"text":"mu"},"id":"18977","type":"Title"},{"attributes":{"axis":{"id":"18943"},"dimension":1,"ticker":null},"id":"18946","type":"Grid"},{"attributes":{"source":{"id":"18966"}},"id":"18970","type":"CDSView"}],"root_ids":["18996"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"1bde6f3f-9cbd-4618-a1ec-2e833267de88","root_ids":["18996"],"roots":{"18996":"d45a2836-59e6-4352-9191-302f8d89dcf0"}}];
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