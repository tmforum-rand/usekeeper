## Makefile.am
## vim: ts=3
##
## Process this file with automake to produce Makefile.in

modhtml = usekeeper_app.html \
			usekeeper_sup.html \
			usekeeper_server.html \
			mod_usekeeper_rest_accepted_content.html \
			mod_usekeeper_rest_post.html \
			mod_usekeeper_rest_get.html \
			mod_usekeeper_rest_delete.html \
			mod_usekeeper_rest_patch.html \
			usekeeper_rest.html \
			usekeeper_rest_pagination_server.html \
			usekeeper_rest_pagination_sup.html \
			usekeeper_rest_res_user.html \
			usekeeper.html \
			usekeeper_log.html \
			usekeeper_rest_res_usage.html

doc_DATA = overview.edoc $(modhtml) \
		modules-frame.html overview-summary.html \
		index.html stylesheet.css \
		sigscale-logo.png supervision.png

overview.edoc: overview.edoc-in
	sed -e 's!%VERSION%!$(VERSION)!' \
			-e 's!%DESCRIPTION%!$(PACKAGE)!' < $< > $@

%.html:$(top_srcdir)/src/%.erl	overview.edoc $(top_srcdir)/doc/supervision.edoc
	$(ERL) -noshell -run edoc_run application \
			"'$(PACKAGE_NAME)'" "'$(top_builddir)'" \
			'[{sort_functions,false},{private,true},{todo,true},{source_path,["$(top_srcdir)/src"]},{subpackages,false},{def,{docsrc,"$(top_srcdir)/doc/{@?}"}},{stylesheet_file, "$(top_srcdir)/doc/sigscale.css"}]'
	for i in `ls *.html`; do \
			sed -e 's!erlang logo!sigscale logo!' \
					-e 's!href=\"http://www.erlang.org/\"!href=\"http://www.sigscale.org/\"!' \
					-e 's!erlang.png!sigscale-logo.png!' $$i > $$i.tmp; \
			mv $$i.tmp $$i; \
	done
	-cp -n $(top_srcdir)/doc/sigscale-logo.png .
	-cp -n $(top_srcdir)/doc/supervision.png .

CLEANFILES = overview.edoc edoc-info index.html \
		modules-frame.html overview-summary.html packages-frame.html \
		stylesheet.css erlang.png $(modhtml)

