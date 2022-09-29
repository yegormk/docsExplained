import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map, Observable } from "rxjs";
import { CatGalleryState, CatImage, CatImageData } from "./store/cats.state";
import { CatsService } from "./service/cats.service";
import { select, Store } from '@ngrx/store';
import { selectBreeds } from "./store/cats.selectors";


// export class MainResolver implements Resolve<boolean> {
//     constructor(
//         // private apiService: CatsService,
//         private store: Store
//     ) {}
    
//     resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
//         return this.store.select(selectBreeds)
//             .pipe(map((list: CatImageData) => list.images.length !== 0));
//     }
// }