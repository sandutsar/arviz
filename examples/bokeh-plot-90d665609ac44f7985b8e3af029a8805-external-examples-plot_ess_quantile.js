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
    
      
      
    
      var element = document.getElementById("dbe022e6-10e1-45b7-be58-287754c00fa0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dbe022e6-10e1-45b7-be58-287754c00fa0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"14c085dc-fa7d-47e7-a1f8-548860e21014":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"19076"}],"tools":[{"id":"19066"},{"id":"19067"},{"id":"19068"},{"id":"19069"},{"id":"19070"},{"id":"19071"},{"id":"19072"},{"id":"19073"}]},"id":"19106","type":"ProxyToolbar"},{"attributes":{},"id":"19094","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"19062"},"dimension":1,"ticker":null},"id":"19065","type":"Grid"},{"attributes":{},"id":"19069","type":"WheelZoomTool"},{"attributes":{"text":"sigma"},"id":"19091","type":"Title"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"19094"},"major_label_policy":{"id":"19096"},"ticker":{"id":"19059"}},"id":"19058","type":"LinearAxis"},{"attributes":{"children":[{"id":"19107"},{"id":"19105"}]},"id":"19108","type":"Column"},{"attributes":{},"id":"19050","type":"DataRange1d"},{"attributes":{},"id":"19059","type":"BasicTicker"},{"attributes":{},"id":"19063","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"19066"},{"id":"19067"},{"id":"19068"},{"id":"19069"},{"id":"19070"},{"id":"19071"},{"id":"19072"},{"id":"19073"}]},"id":"19076","type":"Toolbar"},{"attributes":{},"id":"19099","type":"AllLabels"},{"attributes":{"overlay":{"id":"19074"}},"id":"19068","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19075","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19086","type":"Circle"},{"attributes":{},"id":"19056","type":"LinearScale"},{"attributes":{},"id":"19097","type":"BasicTickFormatter"},{"attributes":{},"id":"19102","type":"UnionRenderers"},{"attributes":{"source":{"id":"19085"}},"id":"19089","type":"CDSView"},{"attributes":{},"id":"19052","type":"DataRange1d"},{"attributes":{"children":[[{"id":"19049"},0,0]]},"id":"19105","type":"GridBox"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"19097"},"major_label_policy":{"id":"19099"},"ticker":{"id":"19063"}},"id":"19062","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19074","type":"BoxAnnotation"},{"attributes":{},"id":"19066","type":"ResetTool"},{"attributes":{"callback":null},"id":"19073","type":"HoverTool"},{"attributes":{"overlay":{"id":"19075"}},"id":"19070","type":"LassoSelectTool"},{"attributes":{},"id":"19067","type":"PanTool"},{"attributes":{},"id":"19071","type":"UndoTool"},{"attributes":{"data_source":{"id":"19085"},"glyph":{"id":"19086"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19087"},"view":{"id":"19089"}},"id":"19088","type":"GlyphRenderer"},{"attributes":{},"id":"19103","type":"Selection"},{"attributes":{},"id":"19054","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"19103"},"selection_policy":{"id":"19102"}},"id":"19085","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"19058"}],"center":[{"id":"19061"},{"id":"19065"}],"height":500,"left":[{"id":"19062"}],"output_backend":"webgl","renderers":[{"id":"19088"},{"id":"19090"}],"title":{"id":"19091"},"toolbar":{"id":"19076"},"toolbar_location":null,"width":500,"x_range":{"id":"19050"},"x_scale":{"id":"19054"},"y_range":{"id":"19052"},"y_scale":{"id":"19056"}},"id":"19049","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"19058"},"ticker":null},"id":"19061","type":"Grid"},{"attributes":{},"id":"19072","type":"SaveTool"},{"attributes":{},"id":"19096","type":"AllLabels"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"19090","type":"Span"},{"attributes":{"toolbar":{"id":"19106"},"toolbar_location":"above"},"id":"19107","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19087","type":"Circle"}],"root_ids":["19108"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"14c085dc-fa7d-47e7-a1f8-548860e21014","root_ids":["19108"],"roots":{"19108":"dbe022e6-10e1-45b7-be58-287754c00fa0"}}];
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