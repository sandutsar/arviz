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
    
      
      
    
      var element = document.getElementById("74235d70-f3ec-4600-8944-a709a3cf410b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '74235d70-f3ec-4600-8944-a709a3cf410b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"abe3c312-63b6-48fb-8ddb-0b35bd84aa95":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"44623"},"glyph":{"id":"44624"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44625"},"view":{"id":"44627"}},"id":"44626","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"44536"},{"id":"44537"},{"id":"44538"},{"id":"44539"},{"id":"44540"},{"id":"44541"},{"id":"44542"},{"id":"44543"}]},"id":"44546","type":"Toolbar"},{"attributes":{},"id":"44520","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"44546"},{"id":"44580"}],"tools":[{"id":"44536"},{"id":"44537"},{"id":"44538"},{"id":"44539"},{"id":"44540"},{"id":"44541"},{"id":"44542"},{"id":"44543"},{"id":"44570"},{"id":"44571"},{"id":"44572"},{"id":"44573"},{"id":"44574"},{"id":"44575"},{"id":"44576"},{"id":"44577"}]},"id":"44680","type":"ProxyToolbar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"44628","type":"Span"},{"attributes":{},"id":"44660","type":"Selection"},{"attributes":{"children":[[{"id":"44519"},0,0],[{"id":"44555"},0,1]]},"id":"44679","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44673"},"selection_policy":{"id":"44672"}},"id":"44623","type":"ColumnDataSource"},{"attributes":{},"id":"44653","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44624","type":"VBar"},{"attributes":{},"id":"44676","type":"UnionRenderers"},{"attributes":{"source":{"id":"44623"}},"id":"44627","type":"CDSView"},{"attributes":{"overlay":{"id":"44578"}},"id":"44572","type":"BoxZoomTool"},{"attributes":{},"id":"44659","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44625","type":"VBar"},{"attributes":{},"id":"44541","type":"UndoTool"},{"attributes":{"overlay":{"id":"44545"}},"id":"44540","type":"LassoSelectTool"},{"attributes":{},"id":"44539","type":"WheelZoomTool"},{"attributes":{},"id":"44542","type":"SaveTool"},{"attributes":{},"id":"44646","type":"BasicTickFormatter"},{"attributes":{},"id":"44656","type":"Selection"},{"attributes":{"callback":null},"id":"44543","type":"HoverTool"},{"attributes":{"overlay":{"id":"44544"}},"id":"44538","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44637","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44677"},"selection_policy":{"id":"44676"}},"id":"44635","type":"ColumnDataSource"},{"attributes":{},"id":"44655","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44544","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"44589"},"glyph":{"id":"44590"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44591"},"view":{"id":"44593"}},"id":"44592","type":"GlyphRenderer"},{"attributes":{},"id":"44537","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44579","type":"PolyAnnotation"},{"attributes":{"source":{"id":"44595"}},"id":"44599","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44656"},"selection_policy":{"id":"44655"}},"id":"44595","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"44600","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44597","type":"VBar"},{"attributes":{"source":{"id":"44589"}},"id":"44593","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44591","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44590","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"44594","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44654"},"selection_policy":{"id":"44653"}},"id":"44589","type":"ColumnDataSource"},{"attributes":{},"id":"44657","type":"UnionRenderers"},{"attributes":{"text":"mu"},"id":"44643","type":"Title"},{"attributes":{"data_source":{"id":"44629"},"glyph":{"id":"44630"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44631"},"view":{"id":"44633"}},"id":"44632","type":"GlyphRenderer"},{"attributes":{},"id":"44654","type":"Selection"},{"attributes":{},"id":"44670","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"44634","type":"Span"},{"attributes":{"callback":null},"id":"44577","type":"HoverTool"},{"attributes":{},"id":"44563","type":"BasicTicker"},{"attributes":{},"id":"44672","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44631","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44646"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44648"},"ticker":{"id":"44529"}},"id":"44528","type":"LinearAxis"},{"attributes":{},"id":"44675","type":"Selection"},{"attributes":{"axis":{"id":"44562"},"ticker":null},"id":"44565","type":"Grid"},{"attributes":{},"id":"44560","type":"LinearScale"},{"attributes":{"source":{"id":"44629"}},"id":"44633","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3]},"id":"44613","type":"FixedTicker"},{"attributes":{"text":"tau"},"id":"44615","type":"Title"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"44606","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44663"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44665"},"ticker":{"id":"44563"}},"id":"44562","type":"LinearAxis"},{"attributes":{"data_source":{"id":"44595"},"glyph":{"id":"44596"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44597"},"view":{"id":"44599"}},"id":"44598","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"44640","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44602","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44649"},"major_label_policy":{"id":"44650"},"ticker":{"id":"44613"}},"id":"44532","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44630","type":"VBar"},{"attributes":{"toolbar":{"id":"44680"},"toolbar_location":"above"},"id":"44681","type":"ToolbarBox"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44596","type":"VBar"},{"attributes":{"source":{"id":"44601"}},"id":"44605","type":"CDSView"},{"attributes":{"axis":{"id":"44532"},"dimension":1,"ticker":null},"id":"44535","type":"Grid"},{"attributes":{},"id":"44658","type":"Selection"},{"attributes":{"data_source":{"id":"44635"},"glyph":{"id":"44636"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44637"},"view":{"id":"44639"}},"id":"44638","type":"GlyphRenderer"},{"attributes":{},"id":"44673","type":"Selection"},{"attributes":{},"id":"44671","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"44612","type":"Span"},{"attributes":{},"id":"44667","type":"AllLabels"},{"attributes":{"data_source":{"id":"44601"},"glyph":{"id":"44602"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44603"},"view":{"id":"44605"}},"id":"44604","type":"GlyphRenderer"},{"attributes":{},"id":"44529","type":"BasicTicker"},{"attributes":{},"id":"44524","type":"LinearScale"},{"attributes":{},"id":"44666","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44545","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"44528"},"ticker":null},"id":"44531","type":"Grid"},{"attributes":{},"id":"44558","type":"LinearScale"},{"attributes":{},"id":"44665","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44618","type":"VBar"},{"attributes":{},"id":"44650","type":"AllLabels"},{"attributes":{"source":{"id":"44607"}},"id":"44611","type":"CDSView"},{"attributes":{"children":[{"id":"44681"},{"id":"44679"}]},"id":"44682","type":"Column"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44671"},"selection_policy":{"id":"44670"}},"id":"44617","type":"ColumnDataSource"},{"attributes":{},"id":"44573","type":"WheelZoomTool"},{"attributes":{},"id":"44522","type":"DataRange1d"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44609","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44578","type":"BoxAnnotation"},{"attributes":{},"id":"44663","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"44617"},"glyph":{"id":"44618"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44619"},"view":{"id":"44621"}},"id":"44620","type":"GlyphRenderer"},{"attributes":{},"id":"44677","type":"Selection"},{"attributes":{},"id":"44536","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44619","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44660"},"selection_policy":{"id":"44659"}},"id":"44607","type":"ColumnDataSource"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44666"},"major_label_policy":{"id":"44667"},"ticker":{"id":"44641"}},"id":"44566","type":"LinearAxis"},{"attributes":{"source":{"id":"44617"}},"id":"44621","type":"CDSView"},{"attributes":{},"id":"44674","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44658"},"selection_policy":{"id":"44657"}},"id":"44601","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"44607"},"glyph":{"id":"44608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44609"},"view":{"id":"44611"}},"id":"44610","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"44528"}],"center":[{"id":"44531"},{"id":"44535"},{"id":"44594"},{"id":"44600"},{"id":"44606"},{"id":"44612"}],"height":331,"left":[{"id":"44532"}],"output_backend":"webgl","renderers":[{"id":"44592"},{"id":"44598"},{"id":"44604"},{"id":"44610"}],"title":{"id":"44615"},"toolbar":{"id":"44546"},"toolbar_location":null,"width":496,"x_range":{"id":"44520"},"x_scale":{"id":"44524"},"y_range":{"id":"44522"},"y_scale":{"id":"44526"}},"id":"44519","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44603","type":"VBar"},{"attributes":{},"id":"44575","type":"UndoTool"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"44622","type":"Span"},{"attributes":{},"id":"44649","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"44570"},{"id":"44571"},{"id":"44572"},{"id":"44573"},{"id":"44574"},{"id":"44575"},{"id":"44576"},{"id":"44577"}]},"id":"44580","type":"Toolbar"},{"attributes":{"source":{"id":"44635"}},"id":"44639","type":"CDSView"},{"attributes":{},"id":"44648","type":"AllLabels"},{"attributes":{"axis":{"id":"44566"},"dimension":1,"ticker":null},"id":"44569","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44608","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"44641","type":"FixedTicker"},{"attributes":{"overlay":{"id":"44579"}},"id":"44574","type":"LassoSelectTool"},{"attributes":{},"id":"44570","type":"ResetTool"},{"attributes":{},"id":"44526","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44636","type":"VBar"},{"attributes":{"below":[{"id":"44562"}],"center":[{"id":"44565"},{"id":"44569"},{"id":"44622"},{"id":"44628"},{"id":"44634"},{"id":"44640"}],"height":331,"left":[{"id":"44566"}],"output_backend":"webgl","renderers":[{"id":"44620"},{"id":"44626"},{"id":"44632"},{"id":"44638"}],"title":{"id":"44643"},"toolbar":{"id":"44580"},"toolbar_location":null,"width":496,"x_range":{"id":"44520"},"x_scale":{"id":"44558"},"y_range":{"id":"44522"},"y_scale":{"id":"44560"}},"id":"44555","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44675"},"selection_policy":{"id":"44674"}},"id":"44629","type":"ColumnDataSource"},{"attributes":{},"id":"44571","type":"PanTool"},{"attributes":{},"id":"44576","type":"SaveTool"}],"root_ids":["44682"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"abe3c312-63b6-48fb-8ddb-0b35bd84aa95","root_ids":["44682"],"roots":{"44682":"74235d70-f3ec-4600-8944-a709a3cf410b"}}];
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