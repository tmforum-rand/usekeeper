/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import './usekeeper-icons.js';
import './style-element.js';

class ukHelp extends PolymerElement {
	static get template() {
		return html`
			<style include="style-element">
			</style>
		<paper-dialog id="overFlowMenu">
			<paper-icon-item class="menu-trigger menuitem"
				on-click="_collapseLogsContact">
				<iron-icon icon="my-icons:contactUs" item-icon></iron-icon>
					Contact Us
			</paper-icon-item>
			<iron-collapse id="contact">
				<div>
					<paper-icon-button
						icon="my-icons:call">
					</paper-icon-button>
					<a href="tel:+639208370397">+639208370397/a>
				</div>
				<div>
					<paper-icon-button
						icon="my-icons:email">
					</paper-icon-button>
					<a target="_blank" href="mailto:info@sigscale.org">info@sigscale.org</a>
				</div>
			</iron-collapse>
			<paper-icon-item class="menu-trigger menuitem">
				<iron-icon icon="my-icons:feedback" item-icon></iron-icon>
				<a target="_blank" href="https://sigscale.atlassian.net/secure/CreateIssue!default.jspa?pid=10307&issuetype=10000">
					Send Feedback
				</a>
			</paper-icon-item>
			<paper-icon-item class="menu-trigger menuitem">
				<iron-icon icon="my-icons:api" item-icon></iron-icon>
				<a target="_blank" href="/doc/index.html">
					API Docs
				</a>
			</paper-icon-item>
			<paper-icon-item
					class="menu-trigger menuitem"
					on-click="helpId">
				<iron-icon icon="my-icons:help" item-icon></iron-icon>
					Help
			</paper-icon-item>
			<paper-icon-item class="menu-trigger menuitem" on-click="_about">
				<iron-icon icon="my-icons:about"></iron-icon>
					About
			</paper-icon-item>
		</paper-dialog>
		<paper-dialog id="helpMenu">
			<paper-toolbar>
				<div slot="top" class="title">
					Help
				</div>
			</paper-toolbar>
			<paper-icon-item
					on-click="useSpecs">
					<iron-icon icon="my-icons:assignment" slot="item-icon"></iron-icon>
						Specifications
			</paper-icon-item>
			<paper-icon-item
					on-click="usage">
					<iron-icon icon="my-icons:logIcon" slot="item-icon"></iron-icon>
						Logs
			</paper-icon-item>
			<paper-icon-item
					on-click="users">
					<iron-icon icon="my-icons:users" slot="item-icon"></iron-icon>
						Users
			</paper-icon-item>
		</paper-dialog>
		<paper-dialog id="helpSpecs">
			<paper-toolbar>
				<paper-icon-button
						slot="top"
						icon="my-icons:arrow-back"
						on-click="helpBack">
				</paper-icon-button>
				<div slot="top" class="title">
					Usage Specifications
				</div>
			</paper-toolbar>
			<paper-icon-item>
				<iron-icon icon="my-icons:assignment" slot="item-icon"></iron-icon>
				Specifications
			</paper-icon-item>
			<paper-dialog-scrollable>
				<p>To access the <b>Specifications</b> view first open the navigation drawer
				by selecting it's icon <iron-icon class="iconHelp" icon="menu"></iron-icon>
				on the left of the toolbar at top. Select the
				<iron-icon class="iconHelp" icon="my-icons:assignment"></iron-icon>
				<b>Specifications</b> view from the navigation menu.</p>
				<p>Usage Specifications are ...</p>
			</paper-dialog-scrollable>
		</paper-dialog>
		<paper-dialog id="helpUsage">
			<paper-toolbar>
				<paper-icon-button
						slot="top"
						icon="my-icons:arrow-back"
						on-click="helpBack">
				</paper-icon-button>
				<div slot="top" class="title">
					Usage Records
				</div>
			</paper-toolbar>
			<paper-icon-item>
				<iron-icon icon="my-icons:assignment" slot="item-icon"></iron-icon>
				Usage
			</paper-icon-item>
			<paper-dialog-scrollable>
				<p>To access the <b>Usage</b> view first open the navigation drawer
				by selecting it's icon <iron-icon class="iconHelp" icon="menu"></iron-icon>
				on the left of the toolbar at top. Select the
				<iron-icon class="iconHelp" icon="my-icons:assignment"></iron-icon>
				<b>Usage</b> view from the navigation menu.</p>
			</paper-dialog-scrollable>
		</paper-dialog>
		<paper-dialog id="aboutHelp">
			<paper-toolbar>
			<div slot="top"><h2>About</h2></div>
			</paper-toolbar>
			<p>UseKeeper<br>
			usekeeper-1.0.0<br>
			Copyright 2019 SigScale Global Inc.<br>
			Apache License Version 2.0<br>
			<a target="_blank" href="http://www.sigscale.org">www.sigscale.org</a></p>
		</paper-dialog>
		`;
	}

	static get properties() {
		return {
			active: {
				type: Boolean,
				observer: '_dialog'
			}
		}
	}

	ready() {
		super.ready();
	}

	_about(event) {
		var aboutUk = document.querySelector('usekeeper-shell').shadowRoot.getElementById('getHelp');
		var aboutUk1 = aboutUk.shadowRoot.getElementById('overFlowMenu');
		aboutUk1.close();
		var aboutObj = aboutUk.shadowRoot.getElementById('aboutHelp');
		aboutObj.open();
	}
	helpId(event) {
		var helpUk = document.querySelector('usekeeper-shell').shadowRoot.getElementById('getHelp');
		var helpUk1 = helpUk.shadowRoot.getElementById('overFlowMenu');
		helpUk1.close();
		var helpObj = helpUk.shadowRoot.getElementById('helpMenu');
		helpObj.open();
	}
	usage(event) {
		var usageUk = document.querySelector('usekeeper-shell').shadowRoot.getElementById('getHelp');
		var useObj = usageUk.shadowRoot.getElementById('helpMenu');
		useObj.close();
		var useObjDialog = usageUk.shadowRoot.getElementById('helpLogs');
		useObjDialog.open();
	}
	helpBack(event) {
		var helpBackUk = document.querySelector('usekeeper-shell').shadowRoot.getElementById('getHelp');
		var helpUsageDialog = helpBackUk.shadowRoot.getElementById('helpUsage');
		helpUsageDialog.close();
		var helpLogDialog = helpBackUk.shadowRoot.getElementById('helpLogs');
		helpLogDialog.close();
		var helpDashDialog = helpBackUk.shadowRoot.getElementById('helpDash');
		helpDashDialog.close();
		var helpObjDialog = helpBackUk.shadowRoot.getElementById('helpUsers');
		helpObjDialog.close();
		var helpBackObj = helpBackUk.shadowRoot.getElementById('helpMenu');
		helpBackObj.open();
	}

	_dialog(newValue) {
		var uk = document.querySelector('usekeeper-shell');
		var help = uk.shadowRoot.getElementById('getHelp');
		var dialog = help.shadowRoot.getElementById('overFlowMenu');
		var overFlow = uk.shadowRoot.getElementById('overFlowIcon');
		if(newValue) {
			dialog.positionTarget = overFlow;
			dialog.open();
		} else {
			dialog.close();
		}
	}

	_collapseLogsContact(event) {
		var uk = document.querySelector('usekeeper-shell').shadowRoot.getElementById('getHelp');
		var ukContact = uk.shadowRoot.getElementById('contact');
		if(ukContact.opened == false) {
			ukContact.show();
		} else {
			ukContact.hide();
		}
	}
}

window.customElements.define('usekeeper-help', ukHelp);
