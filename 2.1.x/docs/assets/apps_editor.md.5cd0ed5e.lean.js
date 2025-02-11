import{_ as e,v as t,b as o,R as a}from"./chunks/framework.a2343820.js";const u=JSON.parse('{"title":"Editor","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"apps/editor.md","filePath":"apps/editor.md"}'),i={name:"apps/editor.md"},r=a('<h1 id="editor" tabindex="-1">Editor <a class="header-anchor" href="#editor" aria-label="Permalink to &quot;Editor&quot;">​</a></h1><h2 id="my-organization" tabindex="-1">My organization <a class="header-anchor" href="#my-organization" aria-label="Permalink to &quot;My organization&quot;">​</a></h2><p>The &quot;my organization&quot; tab contains filtered records owned by the organization of the logged in user. Note that this page will not display any records if no user is logged in. The page is made of :</p><ul><li>The organization name and logo, fetched from <code>organisations$</code> in the <code>OrganizationServiceInterface</code>.</li><li>A table with the filtered records. The table is from the component <code>md-editor-records-list</code>, which does the fetching of the records.</li><li>Two links : <ul><li>The first link is the count of published records for this organization. It leads to the datahub, where the filter by organization will be activated to only show the user&#39;s organization. The filter is set through the URL directly with the name from <code>organisations$</code>.</li><li>The second link is the count of users for this organization. It leads to a new page in the dashboard. The page is also made of the organization&#39;s name and logo, and of a table presenting the users and their details. These users are fetched from the observables <code>user$</code> (logged in user), and <code>allUsers$</code> (all users of geonetwork) in the <code>AuthService</code>. <code>allUsers$</code> are then filtered by their organization to be displayed here. The table in this page is also from the component <code>md-editor-records-list</code>, which detects if an input <code>users</code> (containing the list of filtered users) was received and creates the table accordingly.</li></ul></li></ul><p>It&#39;s important to know that a user with an organization must be logged in for this component to work. If not, or in the case where the organization doesn&#39;t own any records, a message will be displayed instead of the table, to inform the user.</p><h2 id="chapter-2" tabindex="-1">Chapter 2 <a class="header-anchor" href="#chapter-2" aria-label="Permalink to &quot;Chapter 2&quot;">​</a></h2>',6),n=[r];function s(d,h,l,c,f,g){return t(),o("div",null,n)}const m=e(i,[["render",s]]);export{u as __pageData,m as default};
