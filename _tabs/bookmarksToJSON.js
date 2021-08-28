function background_getBookmarks_Recurse(bookmark_Tree_Node, bookmark_Tree_Object){
    for (var i = 0; i < bookmark_Tree_Node.length; i++ ){
        var name;
        
        if (bookmark_Tree_Node[i].title) {
            name = bookmark_Tree_Node[i].title;
        } else {
            // Some people, myself included, don't name bookmarks and use only the favicons to save space on the bookmarks bar but you can't have unnamed files and folders
            
            name = ".Unnamed (index #" + bookmark_Tree_Node[i].index + ")";
        }
        
        if (bookmark_Tree_Node[i].children){
            // This node has subnodes so must be a folder
            
            bookmark_Tree_Object[name] = {};
            
            // Loop through this folders contents then carry on where we left off
            background_getBookmarks_Recurse(bookmark_Tree_Node[i].children, bookmark_Tree_Object[name]);
        } else {
            // This node is a bookmark
            
            bookmark_Tree_Object[name] = bookmark_Tree_Node[i].url;
        }
    }
    
    return bookmark_Tree_Object;
}

function background_getBookmarks_Init(){
    chrome.bookmarks.getTree(
        function (bookmark_Tree_Node_Root){
            var bookmark_Tree_Object = {};
            
            background_getBookmarks_Recurse(bookmark_Tree_Node_Root[0].children, bookmark_Tree_Object);
            
            bookmark_Tree_JSON = JSON.stringify(bookmark_Tree_Object);
            
            console.log(bookmark_Tree_Object);
            console.log(bookmark_Tree_JSON);
        }
    );
}

background_getBookmarks_Init();