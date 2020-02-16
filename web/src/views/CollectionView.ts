import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
    constructor(public parent: Element, private collection: Collection<T, K>) {}

    abstract renderItem(model: T, itemParent: Element): void;

    render(): void {
        this.parent.innerHTML = '';

        this.collection.models.forEach(model => {
            const itemParent = document.createElement('div');
            this.parent.append(itemParent);

            this.renderItem(model, itemParent);
        });
    }
}
