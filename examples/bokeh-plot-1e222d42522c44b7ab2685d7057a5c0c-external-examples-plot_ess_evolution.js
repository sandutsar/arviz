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
    
      
      
    
      var element = document.getElementById("5706c55e-021f-4fef-882a-595926633c57");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5706c55e-021f-4fef-882a-595926633c57' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2b744c39-088e-48ee-b4bb-a76167c7d916":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"18791"},"dimension":1,"ticker":null},"id":"18794","type":"Grid"},{"attributes":{"overlay":{"id":"18804"}},"id":"18799","type":"LassoSelectTool"},{"attributes":{},"id":"18851","type":"UnionRenderers"},{"attributes":{"source":{"id":"18824"}},"id":"18828","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18831","type":"Circle"},{"attributes":{},"id":"18853","type":"UnionRenderers"},{"attributes":{},"id":"18800","type":"UndoTool"},{"attributes":{},"id":"18796","type":"PanTool"},{"attributes":{},"id":"18841","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18820","type":"Line"},{"attributes":{},"id":"18795","type":"ResetTool"},{"attributes":{"data_source":{"id":"18829"},"glyph":{"id":"18830"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18831"},"view":{"id":"18833"}},"id":"18832","type":"GlyphRenderer"},{"attributes":{},"id":"18846","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18815","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18830","type":"Circle"},{"attributes":{},"id":"18792","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18852"},"selection_policy":{"id":"18851"}},"id":"18819","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"18860"},{"id":"18858"}]},"id":"18861","type":"Column"},{"attributes":{},"id":"18850","type":"Selection"},{"attributes":{"children":[[{"id":"18778"},0,0]]},"id":"18858","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18804","type":"PolyAnnotation"},{"attributes":{},"id":"18779","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18824"},"glyph":{"id":"18825"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18826"},"view":{"id":"18828"}},"id":"18827","type":"GlyphRenderer"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18841"},"major_label_policy":{"id":"18843"},"ticker":{"id":"18788"}},"id":"18787","type":"LinearAxis"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18825","type":"Line"},{"attributes":{"source":{"id":"18829"}},"id":"18833","type":"CDSView"},{"attributes":{},"id":"18852","type":"Selection"},{"attributes":{},"id":"18781","type":"DataRange1d"},{"attributes":{"callback":null},"id":"18802","type":"HoverTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18834","type":"Span"},{"attributes":{"text":"b"},"id":"18838","type":"Title"},{"attributes":{},"id":"18788","type":"BasicTicker"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18832"},{"id":"18827"}]},"id":"18837","type":"LegendItem"},{"attributes":{},"id":"18801","type":"SaveTool"},{"attributes":{},"id":"18854","type":"Selection"},{"attributes":{"axis":{"id":"18787"},"ticker":null},"id":"18790","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18816","type":"Circle"},{"attributes":{"source":{"id":"18819"}},"id":"18823","type":"CDSView"},{"attributes":{"toolbars":[{"id":"18805"}],"tools":[{"id":"18795"},{"id":"18796"},{"id":"18797"},{"id":"18798"},{"id":"18799"},{"id":"18800"},{"id":"18801"},{"id":"18802"}]},"id":"18859","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18854"},"selection_policy":{"id":"18853"}},"id":"18824","type":"ColumnDataSource"},{"attributes":{},"id":"18849","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18803","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18821","type":"Line"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18844"},"major_label_policy":{"id":"18846"},"ticker":{"id":"18792"}},"id":"18791","type":"LinearAxis"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18817"},{"id":"18822"}]},"id":"18836","type":"LegendItem"},{"attributes":{"source":{"id":"18814"}},"id":"18818","type":"CDSView"},{"attributes":{"toolbar":{"id":"18859"},"toolbar_location":"above"},"id":"18860","type":"ToolbarBox"},{"attributes":{},"id":"18785","type":"LinearScale"},{"attributes":{},"id":"18843","type":"AllLabels"},{"attributes":{},"id":"18844","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18826","type":"Line"},{"attributes":{},"id":"18855","type":"UnionRenderers"},{"attributes":{},"id":"18783","type":"LinearScale"},{"attributes":{"data_source":{"id":"18814"},"glyph":{"id":"18815"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18816"},"view":{"id":"18818"}},"id":"18817","type":"GlyphRenderer"},{"attributes":{},"id":"18856","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18856"},"selection_policy":{"id":"18855"}},"id":"18829","type":"ColumnDataSource"},{"attributes":{"click_policy":"hide","items":[{"id":"18836"},{"id":"18837"}],"location":"center_right","orientation":"horizontal"},"id":"18835","type":"Legend"},{"attributes":{"above":[{"id":"18835"}],"below":[{"id":"18787"}],"center":[{"id":"18790"},{"id":"18794"}],"height":500,"left":[{"id":"18791"}],"output_backend":"webgl","renderers":[{"id":"18817"},{"id":"18822"},{"id":"18827"},{"id":"18832"},{"id":"18834"}],"title":{"id":"18838"},"toolbar":{"id":"18805"},"toolbar_location":null,"width":500,"x_range":{"id":"18779"},"x_scale":{"id":"18783"},"y_range":{"id":"18781"},"y_scale":{"id":"18785"}},"id":"18778","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"18819"},"glyph":{"id":"18820"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18821"},"view":{"id":"18823"}},"id":"18822","type":"GlyphRenderer"},{"attributes":{},"id":"18798","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18850"},"selection_policy":{"id":"18849"}},"id":"18814","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"18803"}},"id":"18797","type":"BoxZoomTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18795"},{"id":"18796"},{"id":"18797"},{"id":"18798"},{"id":"18799"},{"id":"18800"},{"id":"18801"},{"id":"18802"}]},"id":"18805","type":"Toolbar"}],"root_ids":["18861"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"2b744c39-088e-48ee-b4bb-a76167c7d916","root_ids":["18861"],"roots":{"18861":"5706c55e-021f-4fef-882a-595926633c57"}}];
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