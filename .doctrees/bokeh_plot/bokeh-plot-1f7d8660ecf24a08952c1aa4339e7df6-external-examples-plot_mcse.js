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
    
      
      
    
      var element = document.getElementById("854ea5b6-b334-4fe3-96ef-c6f12018350d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '854ea5b6-b334-4fe3-96ef-c6f12018350d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c0270c30-1883-4f51-bd38-597f585501cb":{"defs":[],"roots":{"references":[{"attributes":{"text":"mu"},"id":"38525","type":"Title"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38553"},"selection_policy":{"id":"38552"}},"id":"38522","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"38444"},{"id":"38445"},{"id":"38446"},{"id":"38447"},{"id":"38448"},{"id":"38449"},{"id":"38450"},{"id":"38451"}]},"id":"38454","type":"Toolbar"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38528"},"major_label_policy":{"id":"38530"},"ticker":{"id":"38437"}},"id":"38436","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"38519","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38488","type":"BoxAnnotation"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38521","type":"Scatter"},{"attributes":{"source":{"id":"38522"}},"id":"38524","type":"CDSView"},{"attributes":{"data_source":{"id":"38513"},"glyph":{"id":"38514"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38515"},"view":{"id":"38517"}},"id":"38516","type":"GlyphRenderer"},{"attributes":{"source":{"id":"38513"}},"id":"38517","type":"CDSView"},{"attributes":{"end":1,"start":-0.05},"id":"38430","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38520","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38531"},"major_label_policy":{"id":"38533"},"ticker":{"id":"38441"}},"id":"38440","type":"LinearAxis"},{"attributes":{},"id":"38552","type":"UnionRenderers"},{"attributes":{},"id":"38553","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38452","type":"BoxAnnotation"},{"attributes":{},"id":"38437","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38489","type":"PolyAnnotation"},{"attributes":{},"id":"38542","type":"BasicTickFormatter"},{"attributes":{},"id":"38432","type":"LinearScale"},{"attributes":{},"id":"38544","type":"AllLabels"},{"attributes":{},"id":"38545","type":"BasicTickFormatter"},{"attributes":{},"id":"38434","type":"LinearScale"},{"attributes":{},"id":"38547","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38537"},"selection_policy":{"id":"38536"}},"id":"38499","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38453","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"38453"}},"id":"38448","type":"LassoSelectTool"},{"attributes":{},"id":"38536","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"38454"},{"id":"38490"}],"tools":[{"id":"38444"},{"id":"38445"},{"id":"38446"},{"id":"38447"},{"id":"38448"},{"id":"38449"},{"id":"38450"},{"id":"38451"},{"id":"38480"},{"id":"38481"},{"id":"38482"},{"id":"38483"},{"id":"38484"},{"id":"38485"},{"id":"38486"},{"id":"38487"}]},"id":"38556","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"38436"},"ticker":null},"id":"38439","type":"Grid"},{"attributes":{"toolbar":{"id":"38556"},"toolbar_location":"above"},"id":"38557","type":"ToolbarBox"},{"attributes":{"source":{"id":"38499"}},"id":"38503","type":"CDSView"},{"attributes":{},"id":"38537","type":"Selection"},{"attributes":{"children":[{"id":"38557"},{"id":"38555"}]},"id":"38558","type":"Column"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"38518","type":"Span"},{"attributes":{},"id":"38449","type":"UndoTool"},{"attributes":{"axis":{"id":"38440"},"dimension":1,"ticker":null},"id":"38443","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38501","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38542"},"major_label_policy":{"id":"38544"},"ticker":{"id":"38473"}},"id":"38472","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"38466","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38545"},"major_label_policy":{"id":"38547"},"ticker":{"id":"38477"}},"id":"38476","type":"LinearAxis"},{"attributes":{},"id":"38468","type":"LinearScale"},{"attributes":{},"id":"38464","type":"DataRange1d"},{"attributes":{},"id":"38470","type":"LinearScale"},{"attributes":{"callback":null},"id":"38487","type":"HoverTool"},{"attributes":{},"id":"38473","type":"BasicTicker"},{"attributes":{"overlay":{"id":"38452"}},"id":"38446","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"38472"},"ticker":null},"id":"38475","type":"Grid"},{"attributes":{},"id":"38538","type":"UnionRenderers"},{"attributes":{"below":[{"id":"38472"}],"center":[{"id":"38475"},{"id":"38479"}],"height":500,"left":[{"id":"38476"}],"output_backend":"webgl","renderers":[{"id":"38516"},{"id":"38518"},{"id":"38519"},{"id":"38520"},{"id":"38523"}],"title":{"id":"38525"},"toolbar":{"id":"38490"},"toolbar_location":null,"width":500,"x_range":{"id":"38464"},"x_scale":{"id":"38468"},"y_range":{"id":"38466"},"y_scale":{"id":"38470"}},"id":"38463","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"38539","type":"Selection"},{"attributes":{},"id":"38445","type":"PanTool"},{"attributes":{"axis":{"id":"38476"},"dimension":1,"ticker":null},"id":"38479","type":"Grid"},{"attributes":{},"id":"38528","type":"BasicTickFormatter"},{"attributes":{},"id":"38477","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38515","type":"Circle"},{"attributes":{"data_source":{"id":"38499"},"glyph":{"id":"38500"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38501"},"view":{"id":"38503"}},"id":"38502","type":"GlyphRenderer"},{"attributes":{},"id":"38444","type":"ResetTool"},{"attributes":{"overlay":{"id":"38488"}},"id":"38482","type":"BoxZoomTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38507","type":"Scatter"},{"attributes":{},"id":"38481","type":"PanTool"},{"attributes":{},"id":"38530","type":"AllLabels"},{"attributes":{},"id":"38480","type":"ResetTool"},{"attributes":{},"id":"38531","type":"BasicTickFormatter"},{"attributes":{},"id":"38486","type":"SaveTool"},{"attributes":{},"id":"38450","type":"SaveTool"},{"attributes":{},"id":"38483","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"38489"}},"id":"38484","type":"LassoSelectTool"},{"attributes":{},"id":"38485","type":"UndoTool"},{"attributes":{},"id":"38533","type":"AllLabels"},{"attributes":{"callback":null},"id":"38451","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"38480"},{"id":"38481"},{"id":"38482"},{"id":"38483"},{"id":"38484"},{"id":"38485"},{"id":"38486"},{"id":"38487"}]},"id":"38490","type":"Toolbar"},{"attributes":{},"id":"38447","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38514","type":"Circle"},{"attributes":{"children":[[{"id":"38427"},0,0],[{"id":"38463"},0,1]]},"id":"38555","type":"GridBox"},{"attributes":{},"id":"38441","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38551"},"selection_policy":{"id":"38550"}},"id":"38513","type":"ColumnDataSource"},{"attributes":{},"id":"38428","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38539"},"selection_policy":{"id":"38538"}},"id":"38508","type":"ColumnDataSource"},{"attributes":{},"id":"38550","type":"UnionRenderers"},{"attributes":{"below":[{"id":"38436"}],"center":[{"id":"38439"},{"id":"38443"}],"height":500,"left":[{"id":"38440"}],"output_backend":"webgl","renderers":[{"id":"38502"},{"id":"38504"},{"id":"38505"},{"id":"38506"},{"id":"38509"}],"title":{"id":"38511"},"toolbar":{"id":"38454"},"toolbar_location":null,"width":500,"x_range":{"id":"38428"},"x_scale":{"id":"38432"},"y_range":{"id":"38430"},"y_scale":{"id":"38434"}},"id":"38427","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"38522"},"glyph":{"id":"38521"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38524"}},"id":"38523","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38506","type":"Span"},{"attributes":{"source":{"id":"38508"}},"id":"38510","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38500","type":"Circle"},{"attributes":{"text":"tau"},"id":"38511","type":"Title"},{"attributes":{},"id":"38551","type":"Selection"},{"attributes":{"data_source":{"id":"38508"},"glyph":{"id":"38507"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38510"}},"id":"38509","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"38505","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"38504","type":"Span"}],"root_ids":["38558"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"c0270c30-1883-4f51-bd38-597f585501cb","root_ids":["38558"],"roots":{"38558":"854ea5b6-b334-4fe3-96ef-c6f12018350d"}}];
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