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
    
      
      
    
      var element = document.getElementById("88f8c2db-851a-4b74-a5a4-d6eb02954be8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '88f8c2db-851a-4b74-a5a4-d6eb02954be8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6b546f37-cc5f-4c80-b341-3641e8583a31":{"defs":[],"roots":{"references":[{"attributes":{},"id":"16031","type":"LinearScale"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"16089","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16076","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"16051","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"16112"},{"id":"16110"}]},"id":"16113","type":"Column"},{"attributes":{"overlay":{"id":"16051"}},"id":"16045","type":"BoxZoomTool"},{"attributes":{},"id":"16107","type":"UnionRenderers"},{"attributes":{},"id":"16033","type":"LinearScale"},{"attributes":{},"id":"16102","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16066","type":"Scatter"},{"attributes":{},"id":"16108","type":"Selection"},{"attributes":{},"id":"16095","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"16095"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"16096"},"ticker":{"id":"16062"}},"id":"16039","type":"LinearAxis"},{"attributes":{},"id":"16044","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"16052","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"16035"}],"center":[{"id":"16038"},{"id":"16042"}],"height":500,"left":[{"id":"16039"}],"output_backend":"webgl","renderers":[{"id":"16067"},{"id":"16072"},{"id":"16077"},{"id":"16082"},{"id":"16087"},{"id":"16089"}],"title":{"id":"16091"},"toolbar":{"id":"16053"},"toolbar_location":null,"width":500,"x_range":{"id":"16027"},"x_scale":{"id":"16031"},"y_range":{"id":"16029"},"y_scale":{"id":"16033"}},"id":"16026","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16043","type":"ResetTool"},{"attributes":{"toolbar":{"id":"16111"},"toolbar_location":"above"},"id":"16112","type":"ToolbarBox"},{"attributes":{},"id":"16094","type":"AllLabels"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"16106"},"selection_policy":{"id":"16105"}},"id":"16079","type":"ColumnDataSource"},{"attributes":{"axis_label":"Log","formatter":{"id":"16092"},"major_label_policy":{"id":"16094"},"ticker":{"id":"16036"}},"id":"16035","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"16100"},"selection_policy":{"id":"16099"}},"id":"16064","type":"ColumnDataSource"},{"attributes":{"source":{"id":"16079"}},"id":"16083","type":"CDSView"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16080","type":"MultiLine"},{"attributes":{},"id":"16099","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"16053"}],"tools":[{"id":"16043"},{"id":"16044"},{"id":"16045"},{"id":"16046"},{"id":"16047"},{"id":"16048"},{"id":"16049"},{"id":"16050"}]},"id":"16111","type":"ProxyToolbar"},{"attributes":{},"id":"16046","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16081","type":"MultiLine"},{"attributes":{},"id":"16048","type":"UndoTool"},{"attributes":{},"id":"16092","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"16064"}},"id":"16068","type":"CDSView"},{"attributes":{"overlay":{"id":"16052"}},"id":"16047","type":"LassoSelectTool"},{"attributes":{},"id":"16091","type":"Title"},{"attributes":{},"id":"16036","type":"BasicTicker"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16070","type":"MultiLine"},{"attributes":{},"id":"16100","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16086","type":"Circle"},{"attributes":{"axis":{"id":"16039"},"dimension":1,"ticker":null},"id":"16042","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16104"},"selection_policy":{"id":"16103"}},"id":"16074","type":"ColumnDataSource"},{"attributes":{"source":{"id":"16084"}},"id":"16088","type":"CDSView"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"16102"},"selection_policy":{"id":"16101"}},"id":"16069","type":"ColumnDataSource"},{"attributes":{},"id":"16049","type":"SaveTool"},{"attributes":{},"id":"16027","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16075","type":"Circle"},{"attributes":{"data_source":{"id":"16069"},"glyph":{"id":"16070"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16071"},"view":{"id":"16073"}},"id":"16072","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"16064"},"glyph":{"id":"16065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16066"},"view":{"id":"16068"}},"id":"16067","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"16084"},"glyph":{"id":"16085"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16086"},"view":{"id":"16088"}},"id":"16087","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16071","type":"MultiLine"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16085","type":"Circle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"16062","type":"FixedTicker"},{"attributes":{},"id":"16106","type":"Selection"},{"attributes":{},"id":"16105","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"16026"},0,0]]},"id":"16110","type":"GridBox"},{"attributes":{"active_multi":null,"tools":[{"id":"16043"},{"id":"16044"},{"id":"16045"},{"id":"16046"},{"id":"16047"},{"id":"16048"},{"id":"16049"},{"id":"16050"}]},"id":"16053","type":"Toolbar"},{"attributes":{"data_source":{"id":"16074"},"glyph":{"id":"16075"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16076"},"view":{"id":"16078"}},"id":"16077","type":"GlyphRenderer"},{"attributes":{},"id":"16096","type":"AllLabels"},{"attributes":{"source":{"id":"16074"}},"id":"16078","type":"CDSView"},{"attributes":{"axis":{"id":"16035"},"ticker":null},"id":"16038","type":"Grid"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16065","type":"Scatter"},{"attributes":{"end":0.5,"start":-1.5},"id":"16029","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16108"},"selection_policy":{"id":"16107"}},"id":"16084","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"16050","type":"HoverTool"},{"attributes":{"source":{"id":"16069"}},"id":"16073","type":"CDSView"},{"attributes":{"data_source":{"id":"16079"},"glyph":{"id":"16080"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16081"},"view":{"id":"16083"}},"id":"16082","type":"GlyphRenderer"},{"attributes":{},"id":"16101","type":"UnionRenderers"},{"attributes":{},"id":"16103","type":"UnionRenderers"},{"attributes":{},"id":"16104","type":"Selection"}],"root_ids":["16113"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"6b546f37-cc5f-4c80-b341-3641e8583a31","root_ids":["16113"],"roots":{"16113":"88f8c2db-851a-4b74-a5a4-d6eb02954be8"}}];
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