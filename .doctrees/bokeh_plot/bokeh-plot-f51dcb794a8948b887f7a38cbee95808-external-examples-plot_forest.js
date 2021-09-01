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
    
      
      
    
      var element = document.getElementById("a19512b6-5515-48c4-a19e-339b211b4277");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a19512b6-5515-48c4-a19e-339b211b4277' but no matching script tag was found.")
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
                    
                  var docs_json = '{"975ab4ad-8f6b-465a-b468-23056d8db048":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19241","type":"Line"},{"attributes":{"formatter":{"id":"19322"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"19323"},"ticker":{"id":"19313"}},"id":"19166","type":"LinearAxis"},{"attributes":{"data_source":{"id":"19294"},"glyph":{"id":"19295"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19296"},"view":{"id":"19298"}},"id":"19297","type":"GlyphRenderer"},{"attributes":{"click_policy":"hide","items":[{"id":"19316"},{"id":"19317"}],"location":"top_left"},"id":"19315","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19236","type":"Line"},{"attributes":{"data_source":{"id":"19209"},"glyph":{"id":"19210"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19211"},"view":{"id":"19213"}},"id":"19212","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19264"}},"id":"19268","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19280","type":"Line"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19347"},"selection_policy":{"id":"19346"}},"id":"19239","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19250","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19281","type":"Line"},{"attributes":{"data_source":{"id":"19254"},"glyph":{"id":"19255"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19256"},"view":{"id":"19258"}},"id":"19257","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19239"},"glyph":{"id":"19240"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19241"},"view":{"id":"19243"}},"id":"19242","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19269"}},"id":"19273","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19276","type":"Circle"},{"attributes":{},"id":"19163","type":"BasicTicker"},{"attributes":{"source":{"id":"19279"}},"id":"19283","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19211","type":"Line"},{"attributes":{"data":{},"selected":{"id":"19355"},"selection_policy":{"id":"19354"}},"id":"19259","type":"ColumnDataSource"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"19312","type":"DataRange1d"},{"attributes":{},"id":"19359","type":"Selection"},{"attributes":{},"id":"19175","type":"UndoTool"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19190","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19260","type":"Circle"},{"attributes":{"formatter":{"id":"19319"},"major_label_policy":{"id":"19321"},"ticker":{"id":"19163"}},"id":"19162","type":"LinearAxis"},{"attributes":{"source":{"id":"19229"}},"id":"19233","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"19351"},"selection_policy":{"id":"19350"}},"id":"19249","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"19315"}],"below":[{"id":"19162"}],"center":[{"id":"19165"},{"id":"19169"}],"height":348,"left":[{"id":"19166"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"19192"},{"id":"19197"},{"id":"19202"},{"id":"19207"},{"id":"19212"},{"id":"19217"},{"id":"19222"},{"id":"19227"},{"id":"19232"},{"id":"19237"},{"id":"19242"},{"id":"19247"},{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"},{"id":"19277"},{"id":"19282"},{"id":"19287"},{"id":"19292"},{"id":"19297"},{"id":"19302"},{"id":"19307"}],"title":{"id":"19309"},"toolbar":{"id":"19180"},"toolbar_location":null,"width":450,"x_range":{"id":"19311"},"x_scale":{"id":"19158"},"y_range":{"id":"19312"},"y_scale":{"id":"19160"}},"id":"19153","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"19376"},"toolbar_location":"above"},"id":"19377","type":"ToolbarBox"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"19327"},"selection_policy":{"id":"19326"}},"id":"19189","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19235","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19285","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"19357"},"selection_policy":{"id":"19356"}},"id":"19264","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19270","type":"Line"},{"attributes":{},"id":"19170","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19275","type":"Circle"},{"attributes":{"source":{"id":"19259"}},"id":"19263","type":"CDSView"},{"attributes":{},"id":"19171","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19251","type":"Line"},{"attributes":{"data_source":{"id":"19264"},"glyph":{"id":"19265"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19266"},"view":{"id":"19268"}},"id":"19267","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"19353"},"selection_policy":{"id":"19352"}},"id":"19254","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19259"},"glyph":{"id":"19260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19261"},"view":{"id":"19263"}},"id":"19262","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19286","type":"Line"},{"attributes":{},"id":"19173","type":"WheelZoomTool"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19255","type":"Line"},{"attributes":{},"id":"19319","type":"BasicTickFormatter"},{"attributes":{"ticks":[1.275]},"id":"19313","type":"FixedTicker"},{"attributes":{"data":{},"selected":{"id":"19361"},"selection_policy":{"id":"19360"}},"id":"19274","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"19365"},"selection_policy":{"id":"19364"}},"id":"19284","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"19179"}},"id":"19174","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"19279"},"glyph":{"id":"19280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19281"},"view":{"id":"19283"}},"id":"19282","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19271","type":"Line"},{"attributes":{"bounds":"auto","min_interval":1},"id":"19311","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19246","type":"Circle"},{"attributes":{},"id":"19322","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19266","type":"Line"},{"attributes":{"data_source":{"id":"19269"},"glyph":{"id":"19270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19271"},"view":{"id":"19273"}},"id":"19272","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19179","type":"PolyAnnotation"},{"attributes":{"source":{"id":"19254"}},"id":"19258","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"19349"},"selection_policy":{"id":"19348"}},"id":"19244","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19265","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19261","type":"Circle"},{"attributes":{},"id":"19176","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19245","type":"Circle"},{"attributes":{"axis":{"id":"19166"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"19169","type":"Grid"},{"attributes":{"data_source":{"id":"19244"},"glyph":{"id":"19245"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19246"},"view":{"id":"19248"}},"id":"19247","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"19359"},"selection_policy":{"id":"19358"}},"id":"19269","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19249"}},"id":"19253","type":"CDSView"},{"attributes":{"callback":null},"id":"19177","type":"HoverTool"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19240","type":"Line"},{"attributes":{"source":{"id":"19274"}},"id":"19278","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19205","type":"Line"},{"attributes":{"source":{"id":"19239"}},"id":"19243","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19191","type":"Line"},{"attributes":{"data_source":{"id":"19274"},"glyph":{"id":"19275"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19276"},"view":{"id":"19278"}},"id":"19277","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19206","type":"Line"},{"attributes":{"active_multi":null,"tools":[{"id":"19170"},{"id":"19171"},{"id":"19172"},{"id":"19173"},{"id":"19174"},{"id":"19175"},{"id":"19176"},{"id":"19177"}]},"id":"19180","type":"Toolbar"},{"attributes":{"source":{"id":"19284"}},"id":"19288","type":"CDSView"},{"attributes":{"axis":{"id":"19162"},"ticker":null},"id":"19165","type":"Grid"},{"attributes":{"source":{"id":"19244"}},"id":"19248","type":"CDSView"},{"attributes":{"data_source":{"id":"19284"},"glyph":{"id":"19285"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19286"},"view":{"id":"19288"}},"id":"19287","type":"GlyphRenderer"},{"attributes":{},"id":"19321","type":"AllLabels"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19210","type":"Line"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"19335"},"selection_policy":{"id":"19334"}},"id":"19209","type":"ColumnDataSource"},{"attributes":{},"id":"19358","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19256","type":"Line"},{"attributes":{"source":{"id":"19204"}},"id":"19208","type":"CDSView"},{"attributes":{"data_source":{"id":"19249"},"glyph":{"id":"19250"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19251"},"view":{"id":"19253"}},"id":"19252","type":"GlyphRenderer"},{"attributes":{},"id":"19323","type":"AllLabels"},{"attributes":{"overlay":{"id":"19178"}},"id":"19172","type":"BoxZoomTool"},{"attributes":{"source":{"id":"19209"}},"id":"19213","type":"CDSView"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"19363"},"selection_policy":{"id":"19362"}},"id":"19279","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19345"},"selection_policy":{"id":"19344"}},"id":"19234","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19234"}},"id":"19238","type":"CDSView"},{"attributes":{},"id":"19160","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19290","type":"Circle"},{"attributes":{},"id":"19373","type":"Selection"},{"attributes":{},"id":"19372","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19178","type":"BoxAnnotation"},{"attributes":{},"id":"19326","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19229"},"glyph":{"id":"19230"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19231"},"view":{"id":"19233"}},"id":"19232","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"19333"},"selection_policy":{"id":"19332"}},"id":"19204","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"19373"},"selection_policy":{"id":"19372"}},"id":"19304","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19289"}},"id":"19293","type":"CDSView"},{"attributes":{"data_source":{"id":"19304"},"glyph":{"id":"19305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19306"},"view":{"id":"19308"}},"id":"19307","type":"GlyphRenderer"},{"attributes":{},"id":"19356","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19194"},"glyph":{"id":"19195"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19196"},"view":{"id":"19198"}},"id":"19197","type":"GlyphRenderer"},{"attributes":{},"id":"19366","type":"UnionRenderers"},{"attributes":{},"id":"19371","type":"Selection"},{"attributes":{"data_source":{"id":"19219"},"glyph":{"id":"19220"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19221"},"view":{"id":"19223"}},"id":"19222","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19301","type":"Line"},{"attributes":{},"id":"19354","type":"UnionRenderers"},{"attributes":{},"id":"19363","type":"Selection"},{"attributes":{"children":[[{"id":"19153"},0,0]]},"id":"19375","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19216","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19226","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19230","type":"Circle"},{"attributes":{},"id":"19351","type":"Selection"},{"attributes":{"source":{"id":"19214"}},"id":"19218","type":"CDSView"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"19341"},"selection_policy":{"id":"19340"}},"id":"19224","type":"ColumnDataSource"},{"attributes":{},"id":"19344","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19201","type":"Circle"},{"attributes":{},"id":"19341","type":"Selection"},{"attributes":{},"id":"19357","type":"Selection"},{"attributes":{"data_source":{"id":"19204"},"glyph":{"id":"19205"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19206"},"view":{"id":"19208"}},"id":"19207","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"19371"},"selection_policy":{"id":"19370"}},"id":"19299","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19289"},"glyph":{"id":"19290"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19291"},"view":{"id":"19293"}},"id":"19292","type":"GlyphRenderer"},{"attributes":{},"id":"19368","type":"UnionRenderers"},{"attributes":{"source":{"id":"19194"}},"id":"19198","type":"CDSView"},{"attributes":{},"id":"19327","type":"Selection"},{"attributes":{},"id":"19365","type":"Selection"},{"attributes":{"data_source":{"id":"19199"},"glyph":{"id":"19200"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19201"},"view":{"id":"19203"}},"id":"19202","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19196","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19295","type":"Line"},{"attributes":{},"id":"19355","type":"Selection"},{"attributes":{"source":{"id":"19224"}},"id":"19228","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19200","type":"Circle"},{"attributes":{},"id":"19331","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19305","type":"Circle"},{"attributes":{},"id":"19336","type":"UnionRenderers"},{"attributes":{},"id":"19332","type":"UnionRenderers"},{"attributes":{},"id":"19349","type":"Selection"},{"attributes":{},"id":"19345","type":"Selection"},{"attributes":{},"id":"19329","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"19331"},"selection_policy":{"id":"19330"}},"id":"19199","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19199"}},"id":"19203","type":"CDSView"},{"attributes":{},"id":"19350","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19215","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"19367"},"selection_policy":{"id":"19366"}},"id":"19289","type":"ColumnDataSource"},{"attributes":{},"id":"19352","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"19339"},"selection_policy":{"id":"19338"}},"id":"19219","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19294"}},"id":"19298","type":"CDSView"},{"attributes":{"data_source":{"id":"19299"},"glyph":{"id":"19300"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19301"},"view":{"id":"19303"}},"id":"19302","type":"GlyphRenderer"},{"attributes":{},"id":"19158","type":"LinearScale"},{"attributes":{"data":{},"selected":{"id":"19337"},"selection_policy":{"id":"19336"}},"id":"19214","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19306","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19291","type":"Circle"},{"attributes":{},"id":"19353","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19195","type":"Line"},{"attributes":{},"id":"19328","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19234"},"glyph":{"id":"19235"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19236"},"view":{"id":"19238"}},"id":"19237","type":"GlyphRenderer"},{"attributes":{},"id":"19348","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19225","type":"Line"},{"attributes":{"source":{"id":"19299"}},"id":"19303","type":"CDSView"},{"attributes":{},"id":"19338","type":"UnionRenderers"},{"attributes":{},"id":"19346","type":"UnionRenderers"},{"attributes":{"source":{"id":"19219"}},"id":"19223","type":"CDSView"},{"attributes":{"toolbars":[{"id":"19180"}],"tools":[{"id":"19170"},{"id":"19171"},{"id":"19172"},{"id":"19173"},{"id":"19174"},{"id":"19175"},{"id":"19176"},{"id":"19177"}]},"id":"19376","type":"ProxyToolbar"},{"attributes":{},"id":"19347","type":"Selection"},{"attributes":{},"id":"19367","type":"Selection"},{"attributes":{},"id":"19369","type":"Selection"},{"attributes":{"source":{"id":"19304"}},"id":"19308","type":"CDSView"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"19192"},{"id":"19197"},{"id":"19202"},{"id":"19207"},{"id":"19212"},{"id":"19217"},{"id":"19222"},{"id":"19227"},{"id":"19232"},{"id":"19237"},{"id":"19242"},{"id":"19247"}]},"id":"19316","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19221","type":"Line"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"19329"},"selection_policy":{"id":"19328"}},"id":"19194","type":"ColumnDataSource"},{"attributes":{},"id":"19362","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19300","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19296","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19231","type":"Circle"},{"attributes":{},"id":"19335","type":"Selection"},{"attributes":{},"id":"19342","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19220","type":"Line"},{"attributes":{},"id":"19333","type":"Selection"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"19369"},"selection_policy":{"id":"19368"}},"id":"19294","type":"ColumnDataSource"},{"attributes":{},"id":"19364","type":"UnionRenderers"},{"attributes":{},"id":"19361","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"19309","type":"Title"},{"attributes":{},"id":"19334","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19214"},"glyph":{"id":"19215"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19216"},"view":{"id":"19218"}},"id":"19217","type":"GlyphRenderer"},{"attributes":{},"id":"19337","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"19343"},"selection_policy":{"id":"19342"}},"id":"19229","type":"ColumnDataSource"},{"attributes":{},"id":"19330","type":"UnionRenderers"},{"attributes":{"children":[{"id":"19377"},{"id":"19375"}]},"id":"19378","type":"Column"},{"attributes":{},"id":"19343","type":"Selection"},{"attributes":{},"id":"19370","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19224"},"glyph":{"id":"19225"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19226"},"view":{"id":"19228"}},"id":"19227","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19189"},"glyph":{"id":"19190"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19191"},"view":{"id":"19193"}},"id":"19192","type":"GlyphRenderer"},{"attributes":{},"id":"19340","type":"UnionRenderers"},{"attributes":{"source":{"id":"19189"}},"id":"19193","type":"CDSView"},{"attributes":{},"id":"19360","type":"UnionRenderers"},{"attributes":{},"id":"19339","type":"Selection"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"},{"id":"19277"},{"id":"19282"},{"id":"19287"},{"id":"19292"},{"id":"19297"},{"id":"19302"},{"id":"19307"}]},"id":"19317","type":"LegendItem"}],"root_ids":["19378"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"975ab4ad-8f6b-465a-b468-23056d8db048","root_ids":["19378"],"roots":{"19378":"a19512b6-5515-48c4-a19e-339b211b4277"}}];
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