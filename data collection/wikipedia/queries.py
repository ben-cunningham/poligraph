class Queries:

    create_edge = """
    create table edge (
        "to" char,
        "from" char,
        "context" char
    );
    """
    
    create_vertex = """
    create table vertex(
        entity char(10) primary key,
        name char(100),
        url varchar(500)
    );
    """

    insert_politician = """
    insert into vertex (entity, name, url)
    values (%s, %s, %s);
    """

    insert_connection = """
    insert into edge
    values (%s, %s,  %s);
    """

    fetch_rows = """
    select * from vertex;
    """

    get_edge = """
    select * from edge where "to"=%s and "from"=%s;
    """

    update_edge = """
    update edge set context=%s where "to"=%s and "from"=%s;
    """

    get_entity = """
    select * from vertex where name=%s;
    """
