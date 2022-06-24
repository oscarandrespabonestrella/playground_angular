export class RequestFilms {
    static readonly type = '[Ghibli Films] Reques film list';
    constructor() {}
}

export class DeleteFilm {
    static readonly type = '[Ghibli Films] Delete film';
    constructor(public filmId: string) {}
}