# Abstract Data Type

    * ADT graph {

        InitGraph(vertex, isDirected):
            acordding to the number of vertexs and the graph is directed or not, initailize a graph without edge;

        destroy():
            destroy the graph;
        
        isDirected():
            if it's a directed graph then return ture, otherwise return false;
        
        vertex():
            return the number of vertexs in graph;
        
        edge():
            return the nunmber of edges in graph;
        
        firstAdjoinVertex(vertex):
            return the first adjoin vertex of the given vertex; if the given vertex has no adjoin vertex, then return false;
        
        nextAdjoinVertex(vertex1, vertex2):
            vertex2 is an adjoin vertex of vertex1, and find the next adjoin vertex of vertex2, then return it, otherwise return false; if vertex2 is not an adjoin vertex of vertex 1, then return false;
        
        insertEdge(vertex1, vertex2):
            build an edge beteween vertex1 and vertex2;

        deleteEdge(vertex1, vertex2):
            delete the edge beteween vertex1 and vertex2;
        
        isEdge(vertex1, vertex2):
            if there is an edge beteween vertex1 and vertex2, then return true, otherwise return false;
        
        traverse(visit, vertex):
            visit is a function, from the vertex to traverse the graph; every traversed vertex will be a parameter to the visit function, and visit function will be invoked as long as a vertex is traversed;
    }