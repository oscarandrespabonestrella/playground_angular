export class RequestFilms {
    static readonly type = '[Ghibli Films] Reques film list';
    constructor() {}
}

export class DeleteFilm {
    static readonly type = '[Ghibli Films] Delete film';
    constructor(public filmId: string) {}
}

export class EditFilm {
    static readonly type = '[Ghibli Films] Edit film';
    constructor(public filmId: string, public title: string, public description: string) {}
}