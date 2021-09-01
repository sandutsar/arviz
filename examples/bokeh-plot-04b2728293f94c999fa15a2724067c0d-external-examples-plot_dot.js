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
    
      
      
    
      var element = document.getElementById("4d99289a-a75f-4004-91e0-ae44deab14f3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4d99289a-a75f-4004-91e0-ae44deab14f3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"bae1fd6d-62bf-44c9-bdcc-12bebab77164":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18393","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"18371","type":"Line"},{"attributes":{"toolbars":[{"id":"18360"}],"tools":[{"id":"18350"},{"id":"18351"},{"id":"18352"},{"id":"18353"},{"id":"18354"},{"id":"18355"},{"id":"18356"},{"id":"18357"}]},"id":"18409","type":"ProxyToolbar"},{"attributes":{"source":{"id":"18369"}},"id":"18373","type":"CDSView"},{"attributes":{"source":{"id":"18379"}},"id":"18383","type":"CDSView"},{"attributes":{},"id":"18400","type":"Selection"},{"attributes":{"formatter":{"id":"18391"},"major_label_policy":{"id":"18393"},"ticker":{"id":"18343"}},"id":"18342","type":"LinearAxis"},{"attributes":{"source":{"id":"18374"}},"id":"18378","type":"CDSView"},{"attributes":{},"id":"18399","type":"UnionRenderers"},{"attributes":{},"id":"18404","type":"Selection"},{"attributes":{},"id":"18396","type":"AllLabels"},{"attributes":{},"id":"18403","type":"UnionRenderers"},{"attributes":{"axis":{"id":"18346"},"dimension":1,"ticker":null},"id":"18349","type":"Grid"},{"attributes":{},"id":"18391","type":"BasicTickFormatter"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"18375","type":"Line"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"18400"},"selection_policy":{"id":"18399"}},"id":"18369","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"18381","type":"Circle"},{"attributes":{"source":{"id":"18384"}},"id":"18388","type":"CDSView"},{"attributes":{"data_source":{"id":"18379"},"glyph":{"id":"18380"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18381"},"view":{"id":"18383"}},"id":"18382","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18384"},"glyph":{"id":"18385"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18386"},"view":{"id":"18388"}},"id":"18387","type":"GlyphRenderer"},{"attributes":{},"id":"18347","type":"BasicTicker"},{"attributes":{"formatter":{"id":"18394"},"major_label_policy":{"id":"18396"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"18347"}},"id":"18346","type":"LinearAxis"},{"attributes":{"overlay":{"id":"18358"}},"id":"18352","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"18410"},{"id":"18408"}]},"id":"18411","type":"Column"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18359","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"18385","type":"Circle"},{"attributes":{},"id":"18353","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"18406"},"selection_policy":{"id":"18405"}},"id":"18384","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"18402"},"selection_policy":{"id":"18401"}},"id":"18374","type":"ColumnDataSource"},{"attributes":{},"id":"18340","type":"LinearScale"},{"attributes":{},"id":"18356","type":"SaveTool"},{"attributes":{},"id":"18401","type":"UnionRenderers"},{"attributes":{},"id":"18351","type":"PanTool"},{"attributes":{},"id":"18394","type":"BasicTickFormatter"},{"attributes":{},"id":"18350","type":"ResetTool"},{"attributes":{},"id":"18405","type":"UnionRenderers"},{"attributes":{},"id":"18336","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"18376","type":"Line"},{"attributes":{},"id":"18390","type":"Title"},{"attributes":{},"id":"18343","type":"BasicTicker"},{"attributes":{"data":{},"selected":{"id":"18404"},"selection_policy":{"id":"18403"}},"id":"18379","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"18350"},{"id":"18351"},{"id":"18352"},{"id":"18353"},{"id":"18354"},{"id":"18355"},{"id":"18356"},{"id":"18357"}]},"id":"18360","type":"Toolbar"},{"attributes":{"data_source":{"id":"18374"},"glyph":{"id":"18375"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18376"},"view":{"id":"18378"}},"id":"18377","type":"GlyphRenderer"},{"attributes":{},"id":"18338","type":"LinearScale"},{"attributes":{"children":[[{"id":"18333"},0,0]]},"id":"18408","type":"GridBox"},{"attributes":{"toolbar":{"id":"18409"},"toolbar_location":"above"},"id":"18410","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"18359"}},"id":"18354","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"18369"},"glyph":{"id":"18370"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18371"},"view":{"id":"18373"}},"id":"18372","type":"GlyphRenderer"},{"attributes":{},"id":"18406","type":"Selection"},{"attributes":{},"id":"18334","type":"DataRange1d"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"18370","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"18386","type":"Circle"},{"attributes":{},"id":"18355","type":"UndoTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"18380","type":"Circle"},{"attributes":{"below":[{"id":"18342"}],"center":[{"id":"18345"},{"id":"18349"}],"height":360,"left":[{"id":"18346"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"18372"},{"id":"18377"},{"id":"18382"},{"id":"18387"}],"title":{"id":"18390"},"toolbar":{"id":"18360"},"toolbar_location":null,"width":720,"x_range":{"id":"18334"},"x_scale":{"id":"18338"},"y_range":{"id":"18336"},"y_scale":{"id":"18340"}},"id":"18333","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18358","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"18342"},"ticker":null},"id":"18345","type":"Grid"},{"attributes":{},"id":"18402","type":"Selection"},{"attributes":{"callback":null},"id":"18357","type":"HoverTool"}],"root_ids":["18411"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"bae1fd6d-62bf-44c9-bdcc-12bebab77164","root_ids":["18411"],"roots":{"18411":"4d99289a-a75f-4004-91e0-ae44deab14f3"}}];
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