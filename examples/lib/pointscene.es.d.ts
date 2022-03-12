import * as three from 'three';
import { Color, Vector4, IUniform as IUniform$1, Texture, ShaderMaterial, Box3, Matrix4, Vector3, Sphere, Camera, WebGLRenderer, EventDispatcher, BufferGeometry, Points as Points$1, Object3D, WebGLRenderTarget, Ray, RawShaderMaterial, Plane, Scene, Material, Quaternion, Euler, Group, Matrix3, Vector2, PerspectiveCamera, LoadingManager, TextureLoader, SphereBufferGeometry, CircleGeometry, MeshBasicMaterial, Raycaster, Intersection, Mesh, BoxBufferGeometry, ConeBufferGeometry, Shape, LineBasicMaterial, SpriteMaterial, Sprite } from 'three';
import { Context } from 'vm';

declare type IGradient = [number, Color][];
interface IClassification {
    [value: string]: Vector4;
    DEFAULT: Vector4;
}
interface IUniform<T> extends IUniform$1 {
    type: string;
    value: T;
}

interface IBlurMaterialUniforms {
    [name: string]: IUniform<any>;
    near: IUniform<number>;
    far: IUniform<number>;
    screenWidth: IUniform<number>;
    screenHeight: IUniform<number>;
    map: IUniform<Texture | null>;
}
declare class BlurMaterial extends ShaderMaterial {
    vertexShader: string;
    fragmentShader: string;
    uniforms: IBlurMaterialUniforms;
}

declare enum ClipMode {
    DISABLED = 0,
    CLIP_OUTSIDE = 1,
    HIGHLIGHT_INSIDE = 2
}
interface IClipBox {
    box: Box3;
    inverse: Matrix4;
    matrix: Matrix4;
    position: Vector3;
}

declare enum PointSizeType {
    FIXED = 0,
    ATTENUATED = 1,
    ADAPTIVE = 2
}
declare enum PointShape {
    SQUARE = 0,
    CIRCLE = 1,
    PARABOLOID = 2
}
declare enum TreeType {
    OCTREE = 0,
    KDTREE = 1
}
declare enum PointOpacityType {
    FIXED = 0,
    ATTENUATED = 1
}
declare enum PointColorType {
    RGB = 0,
    COLOR = 1,
    DEPTH = 2,
    HEIGHT = 3,
    ELEVATION = 3,
    INTENSITY = 4,
    INTENSITY_GRADIENT = 5,
    LOD = 6,
    LEVEL_OF_DETAIL = 6,
    POINT_INDEX = 7,
    CLASSIFICATION = 8,
    RETURN_NUMBER = 9,
    SOURCE = 10,
    NORMAL = 11,
    PHONG = 12,
    RGB_HEIGHT = 13,
    COMPOSITE = 50
}

declare type GetUrlFn = (url: string) => string | Promise<string>;
declare type XhrRequest = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

declare type Node = IPointCloudTreeNode;
declare class LRUItem {
    node: Node;
    next: LRUItem | null;
    previous: LRUItem | null;
    constructor(node: Node);
}
/**
 * A doubly-linked-list of the least recently used elements.
 */
declare class LRU {
    pointBudget: number;
    first: LRUItem | null;
    last: LRUItem | null;
    numPoints: number;
    private items;
    constructor(pointBudget?: number);
    get size(): number;
    has(node: Node): boolean;
    /**
     * Makes the specified the most recently used item. if the list does not contain node, it will
     * be added.
     */
    touch(node: Node): void;
    private addNew;
    private touchExisting;
    remove(node: Node): void;
    getLRUItem(): Node | undefined;
    freeMemory(): void;
    dispose(): void;
    disposeSubtree(node: Node): void;
}

interface IPointCloudTreeNode {
    id: number;
    name: string;
    level: number;
    index: number;
    spacing: number;
    boundingBox: Box3;
    boundingSphere: Sphere;
    loaded: boolean;
    numPoints: number;
    readonly children: ReadonlyArray<IPointCloudTreeNode | null>;
    readonly isLeafNode: boolean;
    dispose(): void;
    traverse(cb: (node: IPointCloudTreeNode) => void, includeSelf?: boolean): void;
}
interface IVisibilityUpdateResult {
    visibleNodes: IPointCloudTreeNode[];
    numVisiblePoints: number;
    /**
     * True when a node has been loaded but was not added to the scene yet.
     * Make sure to call updatePointClouds() again on the next frame.
     */
    exceededMaxLoadsToGPU: boolean;
    /**
     * True when at least one node in view has failed to load.
     */
    nodeLoadFailed: boolean;
    /**
     * Promises for loading nodes, will reject when loading fails.
     */
    nodeLoadPromises: Promise<void>[];
}
interface IPotree {
    pointBudget: number;
    maxNumNodesLoading: number;
    lru: LRU;
    loadPointCloud(url: string, getUrl: GetUrlFn, xhrRequest?: XhrRequest): Promise<PointCloudOctree>;
    updatePointClouds(pointClouds: PointCloudOctree[], camera: Camera, renderer: WebGLRenderer): IVisibilityUpdateResult;
}
interface PickPoint {
    position?: Vector3;
    normal?: Vector3;
    datasetNormal?: Vector3;
    [property: string]: any;
}
interface PointCloudHit {
    pIndex: number;
    pcIndex: number;
}

/**
 * Adapted from Potree.js http://potree.org
 * Potree License: https://github.com/potree/potree/blob/1.5/LICENSE
 */

interface NodeData {
    children: number;
    numPoints: number;
    name: string;
}
declare class PointCloudOctreeGeometryNode extends EventDispatcher implements IPointCloudTreeNode {
    private static idCount;
    id: number;
    name: string;
    pcoGeometry: PointCloudOctreeGeometry;
    index: number;
    level: number;
    spacing: number;
    hasChildren: boolean;
    readonly children: ReadonlyArray<PointCloudOctreeGeometryNode | null>;
    boundingBox: Box3;
    tightBoundingBox: Box3;
    boundingSphere: Sphere;
    mean: Vector3;
    numPoints: number;
    geometry: BufferGeometry;
    loaded: boolean;
    loading: boolean;
    failed: boolean;
    parent: PointCloudOctreeGeometryNode | null;
    oneTimeDisposeHandlers: (() => void)[];
    isLeafNode: boolean;
    xhrInit: RequestInit;
    readonly isTreeNode: boolean;
    readonly isGeometryNode: boolean;
    constructor(name: string, pcoGeometry: PointCloudOctreeGeometry, boundingBox: Box3, xhrInit?: RequestInit);
    dispose(): void;
    /**
     * Gets the url of the binary file for this node.
     */
    getUrl(): string;
    /**
     * Gets the url of the hierarchy file for this node.
     */
    getHierarchyUrl(): string;
    /**
     * Adds the specified node as a child of the current node.
     *
     * @param child
     *    The node which is to be added as a child.
     */
    addChild(child: PointCloudOctreeGeometryNode): void;
    /**
     * Calls the specified callback for the current node (if includeSelf is set to true) and all its
     * children.
     *
     * @param cb
     *    The function which is to be called for each node.
     */
    traverse(cb: (node: PointCloudOctreeGeometryNode) => void, includeSelf?: boolean): void;
    load(): Promise<void>;
    private canLoad;
    private loadPoints;
    private loadHierachyThenPoints;
    /**
     * Gets the url of the folder where the hierarchy is, relative to the octreeDir.
     */
    private getHierarchyBaseUrl;
    private loadHierarchy;
    private getNodeData;
    addNode({ name, numPoints, children }: NodeData, pco: PointCloudOctreeGeometry, nodes: Map<string, PointCloudOctreeGeometryNode>): void;
}

declare class Version {
    version: string;
    versionMajor: number;
    versionMinor: number;
    constructor(version: string);
    newerThan(version: string): boolean;
    equalOrHigher(version: string): boolean;
    upTo(version: string): boolean;
}

interface BinaryLoaderOptions {
    getUrl?: GetUrlFn;
    version: string;
    boundingBox: Box3;
    scale: number;
    xhrRequest: XhrRequest;
}
declare class BinaryLoader {
    version: Version;
    boundingBox: Box3;
    scale: number;
    getUrl: GetUrlFn;
    disposed: boolean;
    xhrRequest: XhrRequest;
    callbacks: ((node: PointCloudOctreeGeometryNode) => void)[];
    private workers;
    constructor({ getUrl, version, boundingBox, scale, xhrRequest, }: BinaryLoaderOptions);
    dispose(): void;
    load(node: PointCloudOctreeGeometryNode): Promise<void>;
    private getNodeUrl;
    private parse;
    private getWorker;
    private releaseWorker;
    private getTightBoundingBox;
    private addBufferAttributes;
    private addIndices;
    private addNormalAttribute;
    private isAttribute;
}

interface LASLoaderOptions {
    getUrl?: GetUrlFn;
    version: string;
    boundingBox: Box3;
    scale: number;
    xhrRequest: XhrRequest;
    xhrInit?: RequestInit;
}
declare class LASLoader {
    version: Version;
    boundingBox: Box3;
    scale: number;
    getUrl: GetUrlFn;
    disposed: boolean;
    xhrRequest: XhrRequest;
    xhrInit: RequestInit;
    callbacks: ((node: PointCloudOctreeGeometryNode) => void)[];
    private workers;
    constructor({ getUrl, version, boundingBox, scale, xhrRequest, xhrInit, }: LASLoaderOptions);
    dispose(): void;
    load(node: PointCloudOctreeGeometryNode): Promise<void>;
    private getNodeUrl;
    private parse;
    private getWorker;
    private releaseWorker;
}

declare enum PointAttributeName {
    POSITION_CARTESIAN = 0,
    COLOR_PACKED = 1,
    COLOR_FLOATS_1 = 2,
    COLOR_FLOATS_255 = 3,
    NORMAL_FLOATS = 4,
    FILLER = 5,
    INTENSITY = 6,
    CLASSIFICATION = 7,
    NORMAL_SPHEREMAPPED = 8,
    NORMAL_OCT16 = 9,
    NORMAL = 10
}
interface PointAttributeType {
    ordinal: number;
    size: number;
}
declare const POINT_ATTRIBUTE_TYPES: Record<string, PointAttributeType>;
interface IPointAttribute {
    name: PointAttributeName;
    type: PointAttributeType;
    numElements: number;
    byteSize: number;
}
interface IPointAttributes {
    attributes: IPointAttribute[];
    byteSize: number;
    size: number;
}
declare const POINT_ATTRIBUTES: {
    POSITION_CARTESIAN: IPointAttribute;
    RGBA_PACKED: IPointAttribute;
    COLOR_PACKED: IPointAttribute;
    RGB_PACKED: IPointAttribute;
    NORMAL_FLOATS: IPointAttribute;
    FILLER_1B: IPointAttribute;
    INTENSITY: IPointAttribute;
    CLASSIFICATION: IPointAttribute;
    NORMAL_SPHEREMAPPED: IPointAttribute;
    NORMAL_OCT16: IPointAttribute;
    NORMAL: IPointAttribute;
};
declare type PointAttributeStringName = keyof typeof POINT_ATTRIBUTES;
declare class PointAttributes implements IPointAttributes {
    attributes: IPointAttribute[];
    byteSize: number;
    size: number;
    constructor(pointAttributeNames?: PointAttributeStringName[]);
    add(pointAttribute: IPointAttribute): void;
    hasColors(): boolean;
    hasNormals(): boolean;
}

declare class PointCloudOctreeGeometry {
    loader: BinaryLoader | LASLoader;
    boundingBox: Box3;
    tightBoundingBox: Box3;
    offset: Vector3;
    xhrRequest: XhrRequest;
    xhrInit?: RequestInit | undefined;
    disposed: boolean;
    needsUpdate: boolean;
    root: PointCloudOctreeGeometryNode;
    octreeDir: string;
    hierarchyStepSize: number;
    nodes: Record<string, PointCloudOctreeGeometryNode>;
    numNodesLoading: number;
    maxNumNodesLoading: number;
    spacing: number;
    pointAttributes: PointAttributes;
    projection: any;
    url: string | null;
    constructor(loader: BinaryLoader | LASLoader, boundingBox: Box3, tightBoundingBox: Box3, offset: Vector3, xhrRequest: XhrRequest, xhrInit?: RequestInit | undefined);
    dispose(): void;
    addNodeLoadedCallback(callback: (node: PointCloudOctreeGeometryNode) => void): void;
    clearNodeLoadedCallbacks(): void;
}

declare class PointCloudOctreeNode extends EventDispatcher implements IPointCloudTreeNode {
    geometryNode: PointCloudOctreeGeometryNode;
    sceneNode: Points$1;
    pcIndex: number | undefined;
    boundingBoxNode: Object3D | null;
    readonly children: (IPointCloudTreeNode | null)[];
    readonly loaded = true;
    readonly isTreeNode: boolean;
    readonly isGeometryNode: boolean;
    constructor(geometryNode: PointCloudOctreeGeometryNode, sceneNode: Points$1);
    dispose(): void;
    disposeSceneNode(): void;
    traverse(cb: (node: IPointCloudTreeNode) => void, includeSelf?: boolean): void;
    get id(): number;
    get name(): string;
    get level(): number;
    get isLeafNode(): boolean;
    get numPoints(): number;
    get index(): number;
    get boundingSphere(): Sphere;
    get boundingBox(): Box3;
    get spacing(): number;
}

interface PickParams {
    pickWindowSize: number;
    pickOutsideClipRegion: boolean;
    /**
     * If provided, the picking will use this pixel position instead of the `Ray` passed to the `pick`
     * method.
     */
    pixelPosition: Vector3;
    /**
     * Function which gets called after a picking material has been created and setup and before the
     * point cloud is rendered into the picking render target. This gives applications a chance to
     * customize the renderTarget and the material.
     *
     * @param material
     *    The pick material.
     * @param renterTarget
     *    The render target used for picking.
     */
    onBeforePickRender: (material: PointCloudMaterial, renterTarget: WebGLRenderTarget) => void;
}

declare class PointCloudTree extends Object3D {
    root: IPointCloudTreeNode | null;
    initialized(): boolean;
}

declare class PointCloudOctree extends PointCloudTree {
    potree: IPotree;
    disposed: boolean;
    pcoGeometry: PointCloudOctreeGeometry;
    boundingBox: Box3;
    boundingSphere: Sphere;
    material: PointCloudMaterial;
    level: number;
    maxLevel: number;
    /**
     * The minimum radius of a node's bounding sphere on the screen in order to be displayed.
     */
    minNodePixelSize: number;
    root: IPointCloudTreeNode | null;
    boundingBoxNodes: Object3D[];
    visibleNodes: PointCloudOctreeNode[];
    visibleGeometry: PointCloudOctreeGeometryNode[];
    numVisiblePoints: number;
    showBoundingBox: boolean;
    private visibleBounds;
    private picker;
    constructor(potree: IPotree, pcoGeometry: PointCloudOctreeGeometry, material?: PointCloudMaterial);
    private initMaterial;
    dispose(): void;
    get pointSizeType(): PointSizeType;
    set pointSizeType(value: PointSizeType);
    toTreeNode(geometryNode: PointCloudOctreeGeometryNode, parent?: PointCloudOctreeNode | null): PointCloudOctreeNode;
    updateVisibleBounds(): void;
    updateBoundingBoxes(): void;
    updateMatrixWorld(force: boolean): void;
    hideDescendants(object: Object3D): void;
    moveToOrigin(): void;
    moveToGroundPlane(): void;
    getBoundingBoxWorld(): Box3;
    getVisibleExtent(): Box3;
    pick(renderer: WebGLRenderer, camera: Camera, ray: Ray, params?: Partial<PickParams>): PickPoint | null;
    get progress(): number;
}

interface IPointCloudMaterialParameters {
    size: number;
    minSize: number;
    maxSize: number;
    treeType: TreeType;
}
interface IPointCloudMaterialUniforms {
    bbSize: IUniform<[number, number, number]>;
    blendDepthSupplement: IUniform<number>;
    blendHardness: IUniform<number>;
    classificationLUT: IUniform<Texture>;
    clipBoxCount: IUniform<number>;
    clipBoxes: IUniform<Float32Array>;
    depthMap: IUniform<Texture | null>;
    diffuse: IUniform<[number, number, number]>;
    fov: IUniform<number>;
    gradient: IUniform<Texture>;
    heightMax: IUniform<number>;
    heightMin: IUniform<number>;
    intensityBrightness: IUniform<number>;
    intensityContrast: IUniform<number>;
    intensityGamma: IUniform<number>;
    intensityRange: IUniform<[number, number]>;
    level: IUniform<number>;
    maxSize: IUniform<number>;
    minSize: IUniform<number>;
    octreeSize: IUniform<number>;
    opacity: IUniform<number>;
    pcIndex: IUniform<number>;
    rgbBrightness: IUniform<number>;
    rgbContrast: IUniform<number>;
    rgbGamma: IUniform<number>;
    screenHeight: IUniform<number>;
    screenWidth: IUniform<number>;
    size: IUniform<number>;
    spacing: IUniform<number>;
    toModel: IUniform<number[]>;
    transition: IUniform<number>;
    uColor: IUniform<Color>;
    visibleNodes: IUniform<Texture>;
    vnStart: IUniform<number>;
    wClassification: IUniform<number>;
    wElevation: IUniform<number>;
    wIntensity: IUniform<number>;
    wReturnNumber: IUniform<number>;
    wRGB: IUniform<number>;
    wSourceID: IUniform<number>;
    opacityAttenuation: IUniform<number>;
    filterByNormalThreshold: IUniform<number>;
    highlightedPointCoordinate: IUniform<Vector3>;
    highlightedPointColor: IUniform<Vector4>;
    enablePointHighlighting: IUniform<boolean>;
    highlightedPointScale: IUniform<number>;
    useUnscaledElevation: IUniform<boolean>;
    clippingPlanes: IUniform<Vector4[]>;
    clipIntersection: IUniform<boolean>;
}
declare class PointCloudMaterial extends RawShaderMaterial {
    private static helperVec3;
    lights: boolean;
    fog: boolean;
    numClipBoxes: number;
    clipBoxes: IClipBox[];
    _clippingPlanes: Plane[];
    visibleNodesTexture: Texture | undefined;
    private visibleNodeTextureOffsets;
    private _gradient;
    private gradientTexture;
    private _classification;
    private classificationTexture;
    uniforms: IPointCloudMaterialUniforms & Record<string, IUniform<any>>;
    bbSize: [number, number, number];
    depthMap: Texture | undefined;
    fov: number;
    heightMax: number;
    heightMin: number;
    intensityBrightness: number;
    intensityContrast: number;
    intensityGamma: number;
    intensityRange: [number, number];
    maxSize: number;
    minSize: number;
    octreeSize: number;
    opacity: number;
    rgbBrightness: number;
    rgbContrast: number;
    rgbGamma: number;
    screenHeight: number;
    screenWidth: number;
    size: number;
    spacing: number;
    transition: number;
    color: Color;
    weightClassification: number;
    weightElevation: number;
    weightIntensity: number;
    weightReturnNumber: number;
    weightRGB: number;
    weightSourceID: number;
    opacityAttenuation: number;
    filterByNormalThreshold: number;
    highlightedPointCoordinate: Vector3;
    highlightedPointColor: Vector4;
    enablePointHighlighting: boolean;
    highlightedPointScale: number;
    useUnscaledElevation: boolean;
    clipIntersection: boolean;
    useClipBox: boolean;
    weighted: boolean;
    pointColorType: PointColorType;
    pointSizeType: PointSizeType;
    clipMode: ClipMode;
    useEDL: boolean;
    shape: PointShape;
    treeType: TreeType;
    pointOpacityType: PointOpacityType;
    useFilterByNormal: boolean;
    highlightPoint: boolean;
    clippingPlanes: Plane[];
    attributes: {
        position: {
            type: string;
            value: never[];
        };
        color: {
            type: string;
            value: never[];
        };
        normal: {
            type: string;
            value: never[];
        };
        intensity: {
            type: string;
            value: never[];
        };
        classification: {
            type: string;
            value: never[];
        };
        returnNumber: {
            type: string;
            value: never[];
        };
        numberOfReturns: {
            type: string;
            value: never[];
        };
        pointSourceID: {
            type: string;
            value: never[];
        };
        indices: {
            type: string;
            value: never[];
        };
    };
    constructor(parameters?: Partial<IPointCloudMaterialParameters>);
    dispose(): void;
    clearVisibleNodeTextureOffsets(): void;
    updateShaderSource(): void;
    applyDefines(shaderSrc: string): string;
    updateClippingPlanes(): void;
    setClipBoxes(clipBoxes: IClipBox[]): void;
    get gradient(): IGradient;
    set gradient(value: IGradient);
    get classification(): IClassification;
    set classification(value: IClassification);
    private recomputeClassification;
    get elevationRange(): [number, number];
    set elevationRange(value: [number, number]);
    getUniform<K extends keyof IPointCloudMaterialUniforms>(name: K): IPointCloudMaterialUniforms[K]['value'];
    setUniform<K extends keyof IPointCloudMaterialUniforms>(name: K, value: IPointCloudMaterialUniforms[K]['value']): void;
    updateMaterial(octree: PointCloudOctree, visibleNodes: PointCloudOctreeNode[], camera: Camera, renderer: WebGLRenderer): void;
    private updateVisibilityTextureData;
    static makeOnBeforeRender(octree: PointCloudOctree, node: PointCloudOctreeNode, pcIndex?: number): (_renderer: WebGLRenderer, _scene: Scene, _camera: Camera, _geometry: BufferGeometry, material: Material) => void;
}

declare function generateDataTexture(width: number, height: number, color: Color): Texture;
declare function generateGradientTexture(gradient: IGradient): Texture;
declare function generateClassificationTexture(classification: IClassification): Texture;

declare const GRAYSCALE: IGradient;

declare const INFERNO: IGradient;

declare const PLASMA: IGradient;

declare const RAINBOW: IGradient;

declare const SPECTRAL: IGradient;

declare const VIRIDIS: IGradient;

declare const YELLOW_GREEN: IGradient;

declare class QueueItem {
    pointCloudIndex: number;
    weight: number;
    node: IPointCloudTreeNode;
    parent?: IPointCloudTreeNode | null | undefined;
    constructor(pointCloudIndex: number, weight: number, node: IPointCloudTreeNode, parent?: IPointCloudTreeNode | null | undefined);
}
declare class Potree implements IPotree {
    private static picker;
    private _pointBudget;
    private _rendererSize;
    maxNumNodesLoading: number;
    features: {
        SHADER_INTERPOLATION: boolean;
        SHADER_SPLATS: boolean;
        SHADER_EDL: boolean;
        precision: string;
    };
    lru: LRU;
    loadPointCloud(url: string, getUrl: GetUrlFn, xhrRequest?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>, xhrInit?: RequestInit): Promise<PointCloudOctree>;
    updatePointClouds(pointClouds: PointCloudOctree[], camera: Camera, renderer: WebGLRenderer): IVisibilityUpdateResult;
    static pick(pointClouds: PointCloudOctree[], renderer: WebGLRenderer, camera: Camera, ray: Ray, params?: Partial<PickParams>): PickPoint | null;
    dispose(): void;
    get pointBudget(): number;
    set pointBudget(value: number);
    private updateVisibility;
    private updateTreeNodeVisibility;
    private updateChildVisibility;
    private updateBoundingBoxVisibility;
    private shouldClip;
    private updateVisibilityStructures;
}

type index_IBlurMaterialUniforms = IBlurMaterialUniforms;
type index_BlurMaterial = BlurMaterial;
declare const index_BlurMaterial: typeof BlurMaterial;
type index_ClipMode = ClipMode;
declare const index_ClipMode: typeof ClipMode;
type index_IClipBox = IClipBox;
type index_PointSizeType = PointSizeType;
declare const index_PointSizeType: typeof PointSizeType;
type index_PointShape = PointShape;
declare const index_PointShape: typeof PointShape;
type index_TreeType = TreeType;
declare const index_TreeType: typeof TreeType;
type index_PointOpacityType = PointOpacityType;
declare const index_PointOpacityType: typeof PointOpacityType;
type index_PointColorType = PointColorType;
declare const index_PointColorType: typeof PointColorType;
type index_IPointCloudMaterialParameters = IPointCloudMaterialParameters;
type index_IPointCloudMaterialUniforms = IPointCloudMaterialUniforms;
type index_PointCloudMaterial = PointCloudMaterial;
declare const index_PointCloudMaterial: typeof PointCloudMaterial;
declare const index_generateDataTexture: typeof generateDataTexture;
declare const index_generateGradientTexture: typeof generateGradientTexture;
declare const index_generateClassificationTexture: typeof generateClassificationTexture;
type index_IGradient = IGradient;
type index_IClassification = IClassification;
type index_IUniform<T> = IUniform<T>;
declare const index_GRAYSCALE: typeof GRAYSCALE;
declare const index_INFERNO: typeof INFERNO;
declare const index_PLASMA: typeof PLASMA;
declare const index_RAINBOW: typeof RAINBOW;
declare const index_SPECTRAL: typeof SPECTRAL;
declare const index_VIRIDIS: typeof VIRIDIS;
declare const index_YELLOW_GREEN: typeof YELLOW_GREEN;
type index_PointAttributeName = PointAttributeName;
declare const index_PointAttributeName: typeof PointAttributeName;
type index_PointAttributeType = PointAttributeType;
declare const index_POINT_ATTRIBUTE_TYPES: typeof POINT_ATTRIBUTE_TYPES;
type index_IPointAttribute = IPointAttribute;
type index_IPointAttributes = IPointAttributes;
declare const index_POINT_ATTRIBUTES: typeof POINT_ATTRIBUTES;
type index_PointAttributeStringName = PointAttributeStringName;
type index_PointAttributes = PointAttributes;
declare const index_PointAttributes: typeof PointAttributes;
type index_NodeData = NodeData;
type index_PointCloudOctreeGeometryNode = PointCloudOctreeGeometryNode;
declare const index_PointCloudOctreeGeometryNode: typeof PointCloudOctreeGeometryNode;
type index_PointCloudOctreeGeometry = PointCloudOctreeGeometry;
declare const index_PointCloudOctreeGeometry: typeof PointCloudOctreeGeometry;
type index_PointCloudOctreeNode = PointCloudOctreeNode;
declare const index_PointCloudOctreeNode: typeof PointCloudOctreeNode;
type index_PointCloudOctree = PointCloudOctree;
declare const index_PointCloudOctree: typeof PointCloudOctree;
type index_PointCloudTree = PointCloudTree;
declare const index_PointCloudTree: typeof PointCloudTree;
type index_QueueItem = QueueItem;
declare const index_QueueItem: typeof QueueItem;
type index_Potree = Potree;
declare const index_Potree: typeof Potree;
type index_IPointCloudTreeNode = IPointCloudTreeNode;
type index_IVisibilityUpdateResult = IVisibilityUpdateResult;
type index_IPotree = IPotree;
type index_PickPoint = PickPoint;
type index_PointCloudHit = PointCloudHit;
type index_Version = Version;
declare const index_Version: typeof Version;
declare namespace index {
  export {
    index_IBlurMaterialUniforms as IBlurMaterialUniforms,
    index_BlurMaterial as BlurMaterial,
    index_ClipMode as ClipMode,
    index_IClipBox as IClipBox,
    index_PointSizeType as PointSizeType,
    index_PointShape as PointShape,
    index_TreeType as TreeType,
    index_PointOpacityType as PointOpacityType,
    index_PointColorType as PointColorType,
    index_IPointCloudMaterialParameters as IPointCloudMaterialParameters,
    index_IPointCloudMaterialUniforms as IPointCloudMaterialUniforms,
    index_PointCloudMaterial as PointCloudMaterial,
    index_generateDataTexture as generateDataTexture,
    index_generateGradientTexture as generateGradientTexture,
    index_generateClassificationTexture as generateClassificationTexture,
    index_IGradient as IGradient,
    index_IClassification as IClassification,
    index_IUniform as IUniform,
    index_GRAYSCALE as GRAYSCALE,
    index_INFERNO as INFERNO,
    index_PLASMA as PLASMA,
    index_RAINBOW as RAINBOW,
    index_SPECTRAL as SPECTRAL,
    index_VIRIDIS as VIRIDIS,
    index_YELLOW_GREEN as YELLOW_GREEN,
    index_PointAttributeName as PointAttributeName,
    index_PointAttributeType as PointAttributeType,
    index_POINT_ATTRIBUTE_TYPES as POINT_ATTRIBUTE_TYPES,
    index_IPointAttribute as IPointAttribute,
    index_IPointAttributes as IPointAttributes,
    index_POINT_ATTRIBUTES as POINT_ATTRIBUTES,
    index_PointAttributeStringName as PointAttributeStringName,
    index_PointAttributes as PointAttributes,
    index_NodeData as NodeData,
    index_PointCloudOctreeGeometryNode as PointCloudOctreeGeometryNode,
    index_PointCloudOctreeGeometry as PointCloudOctreeGeometry,
    index_PointCloudOctreeNode as PointCloudOctreeNode,
    index_PointCloudOctree as PointCloudOctree,
    index_PointCloudTree as PointCloudTree,
    index_QueueItem as QueueItem,
    index_Potree as Potree,
    index_IPointCloudTreeNode as IPointCloudTreeNode,
    index_IVisibilityUpdateResult as IVisibilityUpdateResult,
    index_IPotree as IPotree,
    index_PickPoint as PickPoint,
    index_PointCloudHit as PointCloudHit,
    index_Version as Version,
  };
}

/** ReferenceFrame handles global origin and related transformations */
declare class ReferenceFrame {
    private _isSet;
    private _upAxis;
    private mRotation;
    private mScale;
    private mPosition;
    private mPreComputed;
    private mNeedsUpdate;
    computeBoundingBox(box: Box3): Box3;
    computeUntranslatedBoundingBox(box: Box3): Box3;
    decomposeMatrix(m: Matrix4): {
        position: Vector3;
        quaternion: Quaternion;
        rotation: Euler;
        scale: Vector3;
    };
    getSceneGroup(objects: PointCloudOctree[]): Group;
    getTransformationMatrix(forceUpdate?: boolean, useScale?: boolean): Matrix4;
    isSet(): boolean;
    toGeo(data: Vector3 | Object3D | {
        x: number;
        y: number;
        z: number;
    }, opts?: {
        forceMatrixUpdate?: boolean;
        useScale?: boolean;
    }): Vector3;
    toScene(data: Vector3 | Object3D | {
        x: number;
        y: number;
        z: number;
    }, opts?: {
        forceMatrixUpdate?: boolean;
        useScale?: boolean;
    }): Vector3;
    set upAxis(axis: string);
    get upAxis(): string;
    setPosition(position: Vector3, negate?: boolean): void;
    set position(vec: Vector3);
    get position(): Vector3;
    setScale(s: Vector3): void;
    set scale(s: Vector3);
    getScale(): Vector3;
    getScaleMatrix3(): Matrix3;
    private _normalize;
}

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

interface ExtendedObject extends Object3D {
    zoom: number;
    updateProjectionMatrix: any;
}
declare class OrbitControls extends EventDispatcher {
    object: ExtendedObject;
    domElement: HTMLElement | undefined | Document;
    enabled: boolean;
    target: Vector3;
    minDistance: number;
    maxDistance: number;
    minZoom: number;
    maxZoom: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    enableDamping: boolean;
    dampingFactor: number;
    dispose: any;
    enablePan: boolean;
    enableZoom: boolean;
    target0: Vector3;
    position0: Vector3;
    zoom0: number;
    update: any;
    zoomSpeed: number;
    enableRotate: boolean;
    rotateSpeed: number;
    keyPanSpeed: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    enableKeys: boolean;
    keys: any;
    mouseButtons: any;
    getPolarAngle: any;
    getAzimuthalAngle: any;
    reset: any;
    constructor(object: Object3D, domElement: HTMLElement);
    get center(): Vector3;
    get noZoom(): boolean;
    set noZoom(value: boolean);
    get noRotate(): boolean;
    set noRotate(value: boolean);
    get noPan(): boolean;
    set noPan(value: boolean);
    get noKeys(): boolean;
    set noKeys(value: boolean);
    get staticMoving(): boolean;
    set staticMoving(value: boolean);
    get dynamicDampingFactor(): number;
    set dynamicDampingFactor(value: number);
}

/** Handles event dispatching to user DOM */
declare class Events {
    _debug: boolean;
    dispatch(eventName: string, eventParams?: object, scope?: HTMLElement): void;
}

/**
 * In-place quicksort for typed arrays (e.g. for Float32Array)
 * provides fast sorting
 * useful e.g. for a custom shader and/or BufferGeometry
 *
 * @author Roman Bolzern <roman.bolzern@fhnw.ch>, 2013
 * @author I4DS http://www.fhnw.ch/i4ds, 2013
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 * Complexity: http://bigocheatsheet.com/ see Quicksort
 *
 * Example:
 * points: [x, y, z, x, y, z, x, y, z, ...]
 * eleSize: 3 //because of (x, y, z)
 * orderElement: 0 //order according to x
 */
/**
 * k-d Tree for typed arrays (e.g. for Float32Array), in-place
 * provides fast nearest neighbour search
 * useful e.g. for a custom shader and/or BufferGeometry, saves tons of memory
 * has no insert and remove, only buildup and neares neighbour search
 *
 * Based on https://github.com/ubilabs/kd-tree-javascript by Ubilabs
 *
 * @author Roman Bolzern <roman.bolzern@fhnw.ch>, 2013
 * @author I4DS http://www.fhnw.ch/i4ds, 2013
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 * Requires typed array quicksort
 *
 * Example:
 * points: [x, y, z, x, y, z, x, y, z, ...]
 * metric: function(a, b){	return Math.pow(a[0] - b[0], 2) +  Math.pow(a[1] - b[1], 2) +  Math.pow(a[2] - b[2], 2); }  //Manhatten distance
 * eleSize: 3 //because of (x, y, z)
 *
 * Further information (including mathematical properties)
 * http://en.wikipedia.org/wiki/Binary_tree
 * http://en.wikipedia.org/wiki/K-d_tree
 *
 * If you want to further minimize memory usage, remove Node.depth and replace
 * in search algorithm with a traversal to root node (see comments at THREE.TypedArrayUtils.Kdtree.prototype.Node)
 */
declare class KdTree {
    root: any;
    metric: any;
    maxDepth: number;
    eleSize: number;
    constructor(points: Float64Array, metric: any, eleSize: number);
    getMaxDepth(): number;
    nearest(point: number[], maxNodes: number, maxDistance: number): any;
}

interface IPhotos {
    scene: Scene;
    sceneLabels: Scene;
    domEl: HTMLElement;
    mouse: Vector2;
    camera: PerspectiveCamera;
    controls: OrbitControls;
    referenceFrame: ReferenceFrame;
}
interface Photo {
    url: string;
    depthUrl?: string;
    quaternion: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    position: {
        x: number;
        y: number;
        z: number;
    };
}
/** Base class for Photos */
declare class Photos {
    scene: Scene;
    sceneLabels: Scene;
    domEl: HTMLElement;
    mouse: Vector2;
    camera: PerspectiveCamera;
    controls: OrbitControls;
    referenceFrame: ReferenceFrame;
    screenWidth: number;
    screenHeight: number;
    group: Group;
    toolActive: boolean;
    manager: LoadingManager;
    loader: TextureLoader;
    events: Events;
    color: number;
    hoverColor: number;
    activeColor: number;
    type: string;
    eps: number;
    activeOpacity: number;
    peekMplier: number;
    peekRadius: number;
    monoColor: number;
    activeMaterialNeedsUpdate: boolean;
    nNearest: number;
    maxDistance: number;
    nearestObjects: any;
    geometry: SphereBufferGeometry | undefined;
    ringGeometry: CircleGeometry | undefined;
    activeTexture: Texture | undefined;
    activeDepthTexture: Texture | undefined;
    activeDepthData: ImageData | undefined;
    activeObject: Object3D | undefined;
    targetObject: Object3D | undefined;
    hoveredObject: Object3D | undefined;
    isActive: boolean | undefined;
    kdtree: KdTree | undefined;
    depthScale: number;
    constructor(props: IPhotos);
    dispose(): void;
    /**
     * Update active material and mouse position
     */
    update(): void;
    setAllPickable(val: boolean): void;
    getGeometry(): SphereBufferGeometry;
    getRingGeometry(): CircleGeometry;
    getActiveMaterial(): ShaderMaterial;
    getMaterial(): MeshBasicMaterial;
    setPeekMode(value: boolean): void;
    handleResize(): void;
    handleClearHoveredObjects(): void;
    handleSetPhotoPeekMode(event: Event): void;
    handleLeftClick(): void;
    handleToolActivated(): void;
    handleToolDeactivated(): void;
    handleRightClick(): void;
    handleEnterSphereMode(): void;
    handleExitSphereMode(): void;
    /**
     * Add binds
     */
    addPhotosBinds(): void;
    addPhotosListeners(): void;
    /**
     * Remove photo listeners
     */
    removePhotosListeners(): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    /**
     * Remove listeners
     */
    removeListeners(): void;
    addObjectListeners(object: Object3D): void;
    load(params: any): void;
    add(photo: Photo, params: any): void;
    getObjectAtIndex(idx: number): Object3D<three.Event>;
    index(): void;
    openNearest(position: Vector3): void;
    getNearest(position: Vector3, params?: any): {
        d: any;
        idx: number;
    }[] | undefined;
}

interface IPoint2D {
    x: number;
    y: number;
}
/** Mixed maths */
declare class CustomMath {
    projectedRadius(radius: number, fov: number, distance: number, screenHeight: number): number;
    lineSegmentIntersection2D(p1: IPoint2D, p2: IPoint2D, p3: IPoint2D, p4: IPoint2D): IPoint2D | boolean;
    lineLineIntersection2D(p1: IPoint2D, p2: IPoint2D, p3: IPoint2D, p4: IPoint2D): boolean;
    pointInPolygon2D(points: IPoint2D[], test: IPoint2D): boolean;
    almostEquals(val: number, compare: number, limit?: number, abs?: boolean): boolean;
    getMiddlePoint(v1: Vector3, v2: Vector3): Vector3;
    getLineIntersectionXY(p1: IPoint2D, p2: IPoint2D, p3: IPoint2D, p4: IPoint2D): Vector3 | undefined;
    arrayToMatrix(typed: number[], n?: number): number[][];
    typedToArray(typed: number[], n: number): number[];
    arrayToTyped(array: number[][]): Float32Array;
    flipNormal(normal: Vector3, point?: Vector3, viewpoint?: Vector3): Vector3;
    getPlaneNormal(coordinates: number[][]): Vector3;
    getCentroid(coordinates: number[][]): number[];
    rep(s: number[], v: number, k?: number): number[][];
    getSVD(A: number[][]): {
        U: number[][];
        S: number[][];
        V: number[][];
    };
}

interface IPhotoSpheres extends IPhotos {
}
/** PhotoSphere class extends Photos */
declare class PhotoSpheres extends Photos {
    ringOffset: Vector3;
    debugSphere: Object3D;
    pickHistory: Vector3[];
    pickHistorySizeLimit: number;
    pickHistoryDistanceLimit: number;
    mathUtils: CustomMath;
    constructor(props: IPhotoSpheres);
    createActiveSphere(): void;
    calculateRms(arr: number[]): number;
    flipNormal(normal: Vector3, point?: Vector3, viewpoint?: Vector3): Vector3;
    getDepthMetricValue(pixel: number[], depthScale?: number): number;
    normalizePixel(px: number[], width: number, height: number): number[];
    getDepthPixelValue(uv: Vector2): number[];
    load(photos: Photo[], opts?: {
        xhrInit?: RequestInit;
    }): void;
    setTargetSize(value: number): void;
    setActiveOpacity(value: number): void;
    setVisibility(value: boolean): void;
    setBackgroundMode(value: boolean): void;
    handleOpenNearestSphere(event: Event): void;
    handleSetSphereBackgroundMode(event: Event): void;
    handleSetSphereVisibility(event: Event): void;
    handleSetSphereSize(event: Event): void;
    handleSetSphereOpacity(event: Event): void;
    handleLoadSpheres(event: Event): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    /**
     * Remove listeners
     */
    removeListeners(): void;
}

interface IPickPointCloud {
    screenPos: Vector2;
    renderer?: WebGLRenderer;
    pickClipped?: boolean;
    camera?: PerspectiveCamera;
    pointclouds?: PointCloudOctree[];
    pickWindowSize?: number;
}
interface IPointClouds {
    scene?: Scene;
    camera?: PerspectiveCamera;
    renderer?: WebGLRenderer;
    domEl?: HTMLElement;
    referenceFrame?: ReferenceFrame;
    referenceFramePosition?: Vector3;
}
/** Class for PointClouds */
declare class PointClouds {
    scene: Scene | undefined;
    camera: PerspectiveCamera | undefined;
    renderer: WebGLRenderer | undefined;
    domEl: HTMLElement | undefined;
    referenceFrame: ReferenceFrame | undefined;
    pointclouds: PointCloudOctree[];
    pointBudgetLow: number;
    pointBudgetMed: number;
    pointBudgetHigh: number;
    private events;
    private potree;
    private useEDL;
    private edlRenderer;
    private clippingPlanes;
    constructor(props?: IPointClouds);
    initGLExtensions(renderer: WebGLRenderer): void;
    dispose(): void;
    pick(opts: IPickPointCloud): Vector3 | undefined;
    getBoundingBox(pointclouds?: PointCloudOctree[]): Box3;
    setReferenceFrame(rf: ReferenceFrame): void;
    /**
     * Fit height range to point clouds bounding box
     */
    fitHeightRange(): void;
    /**
     * Fit intensity range for point clouds
     */
    fitIntensityRange(): boolean;
    setDefaults(pointclouds: PointCloudOctree[]): void;
    load(url: string | string[], opts?: {
        queryString?: string;
        xhrInit?: RequestInit;
    }): Promise<PointCloudOctree[]>;
    loadInternal(url: string | string[], opts?: {
        queryString?: string;
        xhrInit?: RequestInit;
    }): Promise<PointCloudOctree[]>;
    addToReferenceFrame(pointclouds: PointCloudOctree[], referenceFrame: ReferenceFrame): Object3D;
    /**
     * Render point clouds depending on active shaders
     */
    render(renderer?: WebGLRenderer, scene?: Scene, camera?: PerspectiveCamera): void;
    /**
     * Update point clouds
     */
    update(pointclouds?: PointCloudOctree[], renderer?: WebGLRenderer, camera?: PerspectiveCamera): void;
    /**
     * Set clip boxes
     */
    setClipBoxes(clipBoxes: IClipBox[]): void;
    setClippingPlanes(clippingPlanes: Plane[]): void;
    updateClippingPlanes(clippingPlanes: Plane[]): void;
    setEDLEnabled(value: boolean): void;
    setOpacity(value: number): void;
    setPointBudget(value: string): void;
    translatePosition(vector: Vector3): void;
    setMaterial(value: number): void;
    setColorType(value: number): void;
    setMaterialWeights(weights: {
        rgb?: number;
        int?: number;
        z?: number;
        cls?: number;
    }): void;
    setColorWeight(value: number): void;
    setElevationWeight(value: number): void;
    setIntensityWeight(value: number): void;
    setClassificationWeight(value: number): void;
    setClassVisibility(key: number | string, value: boolean): void;
    setClipMode(value: number): void;
    setPointShape(value: string | number): void;
    setPointSize(value: number): void;
    setPointSizeType(value: string | number): void;
    setHeightRange(range: number[]): void;
    setUseUnscaledElevation(value: boolean): void;
    setIntensityRange(range: [number, number]): void;
    setVisibility(value: boolean): void;
    resize(renderer?: WebGLRenderer, camera?: PerspectiveCamera, domEl?: HTMLElement): void;
    handleWindowResize(): void;
    handleLoadPointcloud(event: Event): void;
    handleSetClipBoxes(event: Event): void;
    handleSetClipMode(event: Event): void;
    handleSetLOD(event: Event): void;
    handleSetMaterial(event: Event): void;
    handleSetMaterialWeights(event: Event): void;
    handleSetClassVisibility(event: Event): void;
    handleUpdateClassRange(event: Event): void;
    handleSetPointShape(event: Event): void;
    handleSetPointSize(event: Event): void;
    handleSetPointSizeType(event: Event): void;
    handleSetHeightRange(event: Event): void;
    handleSetIntensityRange(event: Event): void;
    handleSetEDL(event: Event): void;
    handleSetVisibility(event: Event): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(domEl?: HTMLElement): void;
    /**
     * Remove listeners
     */
    removeListeners(domEl?: HTMLElement): void;
}

interface IAddPointAttributes {
    material: Material;
    geometry: ToolGeometry;
    attributes: any;
    isNew?: boolean;
    rotation?: Vector3;
}
interface IPoints {
    scene: Scene;
    sceneLabels: Scene;
    domEl: HTMLElement;
    referenceFrame: ReferenceFrame;
    mouse: Vector2;
    camera: PerspectiveCamera;
    getMousePointcloudIntersection: pickPointCloudFn;
}
/** Base Points class */
declare class Points {
    scene: Scene;
    sceneLabels: Scene;
    domEl: HTMLElement;
    referenceFrame: ReferenceFrame;
    mouse: Vector2;
    camera: PerspectiveCamera;
    pick: pickPointCloudFn | undefined;
    math: CustomMath;
    type: string;
    group: Group;
    groupLabels: Group;
    color: number;
    hoverColor: number;
    activeColor: number;
    scale: number;
    dragOnPointCloud: boolean;
    hasHoveredObject: boolean;
    hoveredObject: Object3D | undefined;
    addLabelsActive: boolean;
    showLabelsActive: boolean;
    geometry: SphereBufferGeometry | undefined;
    events: Events;
    intersectPlane: Plane | undefined;
    raycaster: Raycaster;
    intersects: Intersection[] | undefined;
    author: string | undefined;
    constructor(props: IPoints);
    dispose(): void;
    reset(): void;
    getLast(): Object3D<three.Event>;
    getStatsHTML(point: Object3D): string;
    getStats(point: Object3D): Vector3;
    getMinMax(): {
        min: any;
        max: any;
    };
    getVertices(): any[];
    getIndex(object: Object3D): number | undefined;
    getObjectByIndex(id: number): Object3D;
    getCount(): number;
    getHovered(): Object3D<three.Event> | undefined;
    getHoveredIndex(): number | undefined;
    getMaterial(): MeshBasicMaterial;
    addLabel(obj: Object3D, offset: Vector3, text?: string): void;
    hideLabel(obj: Object3D): void;
    showLabel(obj: Object3D): void;
    updateLabel(obj: Object3D, text?: string): void;
    updatePosition(point: Object3D): Vector3 | undefined;
    addListeners(point: Object3D): void;
    addPoint(points: number[], colors: number[]): void;
    add(position: Vector3, params: IAddPointAttributes, dragActionCallback?: any, dragEndCallback?: any): void;
    deleteByLineIndex(idx: number): void;
    deleteLastOfLine(): Vector3 | null;
    delete(object: Object3D): void;
    deleteAll(): void;
    setPosition(id: number, position: Vector3): void;
    hideAll(): void;
    showAll(): void;
}

declare type ToolGeometry = BoxBufferGeometry | ConeBufferGeometry | SphereBufferGeometry;
interface IPointTool extends IPoints {
    controls: OrbitControls;
    onAddCallback?: any;
    onEditCallback?: any;
    onCancelCallback?: any;
    pointerColor?: number;
    measurementColor?: number;
    hoverColor?: number;
    activeColor?: number;
}
/** PointTool base class */
declare class PointTool {
    scene: Scene;
    sceneLabels: Scene;
    domEl: HTMLElement;
    pick: pickPointCloudFn | undefined;
    mouse: Vector2;
    camera: PerspectiveCamera;
    controls: OrbitControls;
    referenceFrame: ReferenceFrame;
    screenHeight: number;
    onAddCallback: any;
    onEditCallback: any;
    onCancelCallback: any;
    disableCancelOnRightClick: boolean;
    math: CustomMath;
    events: Events;
    type: string;
    points: Points;
    requireCancel: boolean;
    color: number;
    geometry: ToolGeometry;
    attributes: any;
    pointer: Mesh | undefined;
    mouseDownActive: boolean;
    editActive: boolean;
    hoverActive: boolean;
    editAfterPlacing: boolean;
    autoFollow: boolean;
    autoFollowVector: Vector3 | undefined;
    lastLookAtPosition: Vector3 | undefined;
    numberOfpoints: number;
    insideActiveSection: boolean;
    sphereModeActive: boolean;
    pointerMesh: Mesh | undefined;
    constructor(props: IPointTool);
    dispose(): void;
    disposePoint(): void;
    /**
     * Add binds
     */
    binds(): void;
    handleEndActiveTool(event: Event): void;
    handleClearPoints(): void;
    handleEnterSphereMode(): void;
    handleExitSphereMode(): void;
    handleActiveSphereChanged(): void;
    handleSetAutofollowMode(event: Event): void;
    handleMouseUp(): void;
    handleKeyDown(event: Event): void;
    handleUpdateInsideSection(event: Event): void;
    /**
     * Add point tool binds
     */
    addPointToolBinds(): void;
    /**
     * Add point tool listeners
     */
    addPointToolListeners(): void;
    /**
     * Remove point tool listeners
     */
    removePointToolListeners(): void;
    getAttributeArray(): any[];
    getVertices(): any[];
    onInteraction(): void;
    onCancel(event: Event): void;
    addListeners(): void;
    populateAttributesFromSchema(schema: any): void;
    getMaterial(wireframe?: boolean): MeshBasicMaterial;
    addLoaded(position: Vector3 | {
        x: number;
        y: number;
        z: number;
    }[], attributes?: any): void;
    updateAutoFollow(position: Vector3): void;
    addNew(position: Vector3 | {
        x: number;
        y: number;
        z: number;
    }[]): void;
    dragActionCallback(attr: any, pos: Vector3): void;
    dragEndCallback(obj: Object3D): void;
    add(attributes: any): void;
    save(): void;
    edit(obj: Object3D): void;
    delete(obj: Object3D): void;
    clearAllPoints(): void;
    updatePointerScale(): void;
    updatePointer(): void;
    getPointer(): Mesh<three.BufferGeometry, three.Material | three.Material[]>;
    editLast(): void;
    start(): void;
    end(onCancel?: boolean): void;
    finalize(): void;
}

/** ElevationRangePicker extends PointTool */
declare class ElevationRangePicker extends PointTool {
    maxPoints: number;
    constructor(props: IPointTool);
    dragActionCallback(): void;
    dragEndCallback(): void;
    handleRangePickerStart(): void;
    dispose(): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    removeListeners(): void;
    add(attributes: any): void;
    finalize(): void;
    /**
     * Updates active picker
     * @emits pointscene_update_tooltip
     */
    updatePointer(): void;
}

interface IPolygons {
    scene: Scene;
    sceneLabels: Scene;
    domEl: HTMLElement;
    referenceFrame: ReferenceFrame;
}
/** Polygons base class */
declare class Polygons {
    scene: Scene;
    sceneLabels: Scene;
    domEl: HTMLElement;
    referenceFrame: ReferenceFrame;
    group: Group;
    groupLabels: Group;
    type: string;
    showLabelsActive: boolean;
    color: number;
    hoverColor: number;
    addLabelsActive: boolean;
    hoveredObject: Object3D | undefined;
    activeColor: number;
    hasHoveredObject: boolean;
    math: CustomMath;
    author: string;
    constructor(props: IPolygons);
    dispose(): void;
    reset(): void;
    getObjectByIndex(idx: number): Object3D<three.Event>;
    getLast(): Object3D<three.Event>;
    getCount(): number;
    getHovered(): Object3D<three.Event> | undefined;
    getHoveredIndex(): number | undefined;
    getVerticesFromObject(object: Object3D, toGeo?: boolean, precision?: number): {
        x: number;
        y: number;
        z: number;
    }[];
    getVertices(toGeo?: boolean): {
        x: number;
        y: number;
        z: number;
    }[][];
    updateLabel(obj: Object3D): void;
    updatePosition(polygon: Object3D, vertexIndex: number, position: Vector3): void;
    updatePositionAtLineIndex(lineIndex: number, vertexIndex: number, position: Vector3): void;
    getStatsHTML(obj: Object3D): string;
    getStats(obj: Object3D): {
        perimeter: number;
        area: number;
    };
    getObjectByLineIndex(idx: number): Object3D<three.Event> | undefined;
    getObjectArea3D(obj: Object3D): number;
    getProjectedArray(obj: Object3D): {
        array: number[];
        normal: Vector3;
        quat: Quaternion;
        centroid: {
            x: number;
            y: number;
            z: number;
        };
    };
    addLabel(obj: Object3D, normal: Vector3, centroid: Vector3 | {
        x: number;
        y: number;
        z: number;
    }): void;
    hideLabel(obj: Object3D): void;
    showLabel(obj: Object3D): void;
    addFromObject(obj: Object3D, attributes: any, onDeleteCallback: any): void;
    addListeners(polygon: Object3D): void;
    deleteAll(): void;
    delete(obj: Object3D): void;
    getShape(obj: Object3D | number[]): Shape | undefined;
}

interface ILines {
    scene: Scene;
    sceneLabels: Scene;
    referenceFrame: ReferenceFrame;
    domEl: HTMLElement;
}
/** Base class for Lines */
declare class Lines {
    scene: Scene;
    sceneLabels: Scene;
    referenceFrame: ReferenceFrame;
    domEl: HTMLElement;
    color: number;
    hoverColor: number;
    activeColor: number;
    type: string;
    group: Group;
    groupLabels: Group;
    events: Events;
    index: number;
    addLabelsActive: boolean;
    showLabelsActive: boolean;
    isClosed: boolean;
    author: string | undefined;
    hasHoveredObject: boolean | undefined;
    hoveredObject: Object3D | undefined;
    displayLabels: boolean | undefined;
    constructor(props: ILines);
    dispose(): void;
    reset(): void;
    setVisibilityAll(value: boolean): void;
    getVerticesFromObject(object: Object3D, toGeo?: boolean, precision?: number): {
        x: number;
        y: number;
        z: number;
    }[];
    getVertices(toGeo?: boolean): {
        x: number;
        y: number;
        z: number;
    }[][];
    getLast(): Object3D<three.Event>;
    getIndex(): number;
    getCount(): number;
    getMaterial(): LineBasicMaterial;
    updatePosition(line: Object3D, vertexIndex: number, position: Vector3): void;
    getStatsHTML(line: Object3D): string;
    getStats(line: Object3D): {
        start: Vector3;
        end: Vector3;
        delta: Vector3;
        deltaXY: number;
        deltaZ: number;
        angle: number;
        length: number;
    };
    updatePositionAtLineIndex(lineIndex: number, vertexIndex: number, position: Vector3): void;
    getObjectByLineIndex(idx: number): Object3D<three.Event> | undefined;
    getObjectByIndex(idx: number): Object3D<three.Event>;
    getHovered(): Object3D<three.Event> | undefined;
    getHoveredIndex(): number | undefined;
    addListeners(line: Object3D): void;
    updateLabels(line: Object3D, vertexIndex: number): void;
    addLabel(obj: Object3D, position: Vector3, offset: Vector3, text?: string): void;
    hideLabel(obj: Object3D, idx: number): void;
    showLabel(obj: Object3D, idx: number): void;
    add(vertices: {
        x: number;
        y: number;
        z: number;
    }[], params: any, deleteActionCallback: any): void;
    getObjectIndex(line: Object3D): number | undefined;
    deleteByLineIndex(idx: number): void;
    deleteAll(): void;
    delete(line: Object3D): void;
}

interface ILineTool extends IPointTool {
    disablePointerLine?: boolean;
    lineColor?: number;
    lineHoverColor?: number;
    activeLineColor?: number;
}
/** LineTool extends PointTool */
declare class LineTool extends PointTool {
    disablePointerLine: boolean;
    lines: Lines;
    geometry: ToolGeometry;
    group: Group;
    activeLine: Object3D | undefined;
    activePointCnt: number;
    maxPoints: number;
    constructor(props: ILineTool);
    dispose(): void;
    disposeLine(): void;
    /**
     * Add binds
     */
    binds(): void;
    handleClearLines(): void;
    addLineToolBinds(): void;
    addLineToolListeners(): void;
    /**
     * Remove line tool listeners
     */
    removeLineToolListeners(): void;
    addListeners(): void;
    getVertices(): {
        x: number;
        y: number;
        z: number;
    }[][];
    undo(): void;
    getAttributeArray(): any[];
    updateLine(line: Object3D, position: Vector3, index: number): void;
    getActiveLine(): Object3D<three.Event>;
    edit(obj?: Object3D): void;
    onInteraction(): void;
    updatePointer(): void;
    deleteActionCallback(line: Object3D): void;
    dragActionCallback(attributes: any, position: Vector3): void;
    dragEndCallback(obj?: Object3D): void;
    addLoaded(vertices: {
        x: number;
        y: number;
        z: number;
    }[], attributes: any): void;
    addNew(vertices: {
        x: number;
        y: number;
        z: number;
    }[], toScene?: boolean): void;
    add(attr?: any): void;
    clearAllLines(): void;
    dispatchEnd(): void;
    finalize(): void;
    runFinalizeHooks(): void;
}

interface IPolygonTool extends ILineTool {
    polygonColor?: number;
    polygonHoverColor?: number;
    activePolygonColor?: number;
}
/** PolygonTool extends LineTool */
declare class PolygonTool extends LineTool {
    polygons: Polygons;
    constructor(props: IPolygonTool);
    dispose(): void;
    disposePolygon(): void;
    /**
     * Add binds
     */
    binds(): void;
    handleClearLines(): void;
    /**
     * Add polygon tool binds
     */
    addPolygonToolBinds(): void;
    /**
     * Add polygon tool listeners
     */
    addPolygonToolListeners(): void;
    /**
     * Remove polygon tool listeners
     */
    removePolygonToolListeners(): void;
    addListeners(): void;
    edit(obj: Object3D): void;
    getAttributeArray(): any[];
    onInteraction(): void;
    addLoaded(vertices: {
        x: number;
        y: number;
        z: number;
    }[], attributes: any): void;
    addNew(vertices: {
        x: number;
        y: number;
        z: number;
    }[], toScene?: boolean): void;
    clearAllPolygons(): void;
    runFinalizeHooks(): void;
    deleteActionCallback(obj: Object3D): void;
    dragActionCallback(attributes: any, position: Vector3): void;
    getVertices(): {
        x: number;
        y: number;
        z: number;
    }[][];
}

/** AreaMeasurement class extends PolygonTool */
declare class AreaMeasurement extends PolygonTool {
    constructor(props: IPolygonTool);
    dragEndCallback(): void;
    edit(object: Object3D): void;
    handleAreaMeasurementStart(): void;
    binds(): void;
    addListeners(): void;
    removeListeners(): void;
    dispatchEnd(): void;
}

interface IDistanceMeasurement extends ILineTool {
}
/** DistanceMeasurement extends LineTool */
declare class DistanceMeasurement extends LineTool {
    constructor(props: IDistanceMeasurement);
    dragEndCallback(): void;
    runFinalizeHooks(): void;
    edit(object: Object3D): void;
    handleDistanceMeasurementStart(): void;
    handleDistanceMeasurementDelete(event: Event): void;
    binds(): void;
    addListeners(): void;
    removeListeners(): void;
    dispatchEnd(): void;
}

interface IPointMeasurement extends IPointTool {
}
/** PointMeasurement extends PointTool */
declare class PointMeasurement extends PointTool {
    constructor(props: IPointMeasurement);
    dragActionCallback(): void;
    dragEndCallback(): void;
    handlePointMeasurementStart(): void;
    handlePointMeasurementDelete(event: Event): void;
    binds(): void;
    addListeners(): void;
    removeListeners(): void;
    finalize(): void;
    /**
     * Save placeholder
     */
    save(): void;
    /**
     * Dispatch edit
     * @emits pointscene_measurement_open_for_edit
     */
    edit(object: Object3D): void;
}

/** MeasurementTool handles all measurements */
declare class MeasurementTool {
    referenceFrame: ReferenceFrame;
    domEl: HTMLElement;
    points: PointMeasurement;
    lines: DistanceMeasurement;
    areas: AreaMeasurement;
    private events;
    constructor(props: IPolygonTool);
    dispose(): void;
    openExportDialog(): void;
    handleMeasurementExport(): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    /**
     * Remove listeners
     */
    removeListeners(): void;
    /**
     * Exports measurements as text file
     */
    exportTXT(): void;
    /**
     * Exports measurements as DXF
     */
    exportDXF(): void;
    save(blob: Blob, suffix: string): void;
}

interface ISectionTool extends ILineTool {
}
interface Point2D {
    x: number;
    y: number;
}
interface Point3D extends Point2D {
    z: number;
}
/** SectionTool extends LineTool */
declare class SectionTool extends LineTool {
    width: number;
    height: number;
    geometry: ConeBufferGeometry;
    hoverColor: number;
    activeColor: number;
    maxPoints: number;
    private extrudeOpposite;
    private distanceLimitSquared;
    private clipBoxesNeedUpdate;
    private clipBoxes;
    private intersectPlane;
    private raycaster;
    private intersects;
    private clipMode;
    private startMesh;
    private endMesh;
    private leftMesh;
    private rightMesh;
    private topMesh;
    private bottomMesh;
    private anchorStartPositions;
    private startHeight;
    private startWidth;
    constructor(props: ISectionTool);
    dispose(): void;
    dispatchEnd(): void;
    deleteActionCallback(): void;
    dragActionCallback(): void;
    dragEndCallback(): void;
    onInteraction(): void;
    runFinalizeHooks(): void;
    getSegmentCount(): number;
    getVertexCount(): any;
    updateVertexPosition(): void;
    updateAnchorPositions(): void;
    updateAnchorPosition(idx: number): void;
    updateClipBoxes(): void;
    getPotreeProfile(): {
        points: Vector3[];
        width: number;
    };
    getClipBoxes(): IClipBox[];
    getVerticesFromObject(object: Object3D): Vector3[];
    extrudePositions(object: Object3D, dot: number, preventRecursion?: boolean): void;
    extrude(obj: Object3D): void;
    reset(): void;
    handleSectionToolStart(): void;
    handleSectionToolReset(): void;
    handleIsInsideSection(event: Event): void;
    handleSetClipMode(event: Event): void;
    setClipMode(value: number): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    /**
     * Remove listeners
     */
    removeListeners(): void;
    addPlaneListeners(plane: Object3D, side: string): void;
    insideSection(pos: Vector3): void;
    sortPolyByAngle(polygon: {
        x: number;
        y: number;
        angle?: number;
    }[]): {
        x: number;
        y: number;
        angle?: number | undefined;
    }[];
    findCenter(points: {
        x: number;
        y: number;
        angle?: number;
    }[]): {
        x: number;
        y: number;
    };
    findAngles(c: {
        x: number;
        y: number;
    }, points: {
        x: number;
        y: number;
        angle?: number;
    }[]): void;
    insidePoly(point: {
        x: number;
        y: number;
        z: number;
    }, poly: {
        x: number;
        y: number;
    }[], height_bottom?: number, height_top?: number): boolean;
    getFootprintXY(p1: Vector3, p2: Vector3, width_half: number, fixZ?: number): {
        p1l: Vector3;
        p1r: Vector3;
        p2l: Vector3;
        p2r: Vector3;
    };
    computeFacePseudoNormals(object: Object3D): void;
    /**
     * Updates start positions
     */
    updateStartPositions(): void;
    checkShortSegments(): boolean | undefined;
    checkIntersections(): boolean | undefined;
    /**
     * Updates section planes from achor positions
     */
    updateSidesFromAnchorPositions(): void;
    buildPlanes(vertices: Point3D[]): void;
}

interface IControls {
    camera: Camera;
    domEl: HTMLElement;
    mouse: Vector2;
    getMousePointcloudIntersection?: pickPointCloudFn;
    flyTo: flyToFn;
}
/** Controls class */
declare class Controls {
    camera: Camera;
    domEl: HTMLElement;
    mouse: Vector2;
    getMousePointcloudIntersection: pickPointCloudFn | undefined;
    flyTo: flyToFn;
    controls: OrbitControls;
    orbitControls: OrbitControls;
    controlsEnabled: boolean;
    keyboardEnabled: boolean;
    focusInPointsceneView: boolean;
    mouseInPointscene: boolean;
    keyboardMovementEnabled: boolean;
    sphereControlsEnabled: boolean;
    measurementActive: boolean;
    previousState: any;
    private events;
    private state;
    private clickTimer;
    constructor(opts: IControls);
    dispose(): void;
    handleAutoFollow(event: Event): void;
    handleTouchStart(event: Event): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    /**
     * Removes listeners
     */
    removeListeners(): void;
    onMouseWheel(event: Event): void;
    toggleSphereControls(event: Event): void;
    onDoubleTap(event: Event): void;
    updateControlResetPosition(): void;
    /**
     * Enable movements and controls
     */
    enableControls(): void;
    /**
     * Disable movement and controls
     */
    disableControls(): void;
    /**
     * Update controls
     */
    update(deltaT: number): void;
    /**
     * Set point of rotation (target) in front of camera
     */
    setTargetDistance(step: number): void;
    /**
     * Use orbit controls
     */
    useOrbitControls(): void;
    updateMoveState(): void;
    /**
     * Disable keyboard move state
     */
    disableMoveState(): void;
    onKeyDown(event: Event): void;
    onKeyUp(event: Event): void;
    onDblClick(): void;
}

declare type flyToFn = (location: Vector3, useGeoCoords?: boolean, durationMs?: number, easingIn?: number, distPercent?: number, levelOpts?: {
    keepCameraLevel: boolean;
    levelOffset: number;
}) => void;
declare type pickPointCloudFn = (opts: IPickPointCloud) => Vector3 | undefined;
declare type getCameraViewFn = (dist: number) => {
    cam: Vector3;
    look: Vector3;
};
interface IModules {
    scene: Scene;
    flyTo: flyToFn;
    getCameraView: getCameraViewFn;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    domEl: HTMLElement;
    referenceFrame?: ReferenceFrame;
}
/** Modules class handles creating and updating all the modules */
declare class Modules {
    scene: Scene;
    flyTo: flyToFn;
    getCameraView: getCameraViewFn;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    domEl: HTMLElement;
    sceneStatic: Scene;
    scenePointCloud: Scene;
    scenePickable: Scene;
    sceneLabels: Scene;
    referenceFrame: ReferenceFrame;
    pointclouds: PointClouds | undefined;
    controls: Controls | undefined;
    sectionTool: SectionTool | undefined;
    measurementTool: MeasurementTool | undefined;
    elevationRangePicker: ElevationRangePicker | undefined;
    photoSpheres: PhotoSpheres | undefined;
    private events;
    private mouse;
    private raycastActive;
    private raycaster;
    private dragActive;
    private mouseDownActive;
    private touchDownActive;
    private mouseDownRightStarted;
    private mouseDownLeftStarted;
    private screenWidth;
    private screenHeight;
    private freezeRenderAndUpdate;
    private disposeCount;
    private hoveredElement;
    private disableRaycast;
    private throttle;
    constructor(opts: IModules);
    /**
     * Main render function
     */
    render(): void;
    /**
     * Raycast to scenePickable
     */
    raycast(): Intersection[];
    disposeMaterial(material: any): void;
    recursiveRemove(node: any): void;
    disposeScene(node: any): void;
    dispose(): void;
    update(delta: number): void;
    enableMeasurementTool(): boolean;
    loadPhotoSpheres(photos: Photo[]): boolean;
    loadPointcloud(url: string, opts?: {
        queryString?: string;
        xhrInit?: RequestInit;
    }): Promise<PointCloudOctree[]>;
    /**
     * Creates all the different modules
     */
    updateMouseFromTouch(event: Event): void;
    handleMouseMove(event: Event): void;
    handleTouchMove(event: Event): void;
    handleTouchStart(event: Event): void;
    handleTouchEnd(): void;
    handleMouseDown(event: Event): void;
    handleMouseUp(event: Event): void;
    handleActivateRaycast(): void;
    handleDeactivateRaycast(): void;
    handleLoadComplete(): void;
    handleDisableControls(): void;
    handleEnableControls(): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    removeListeners(): void;
}

interface IWorld {
    domEl: HTMLElement;
    showStats?: boolean;
    preserveDrawingBuffer?: boolean;
    referenceFrame?: ReferenceFrame;
}
/** Main class for PointsceneJS */
declare class World {
    domEl: HTMLElement;
    showStats: boolean;
    preserveDrawingBuffer: boolean;
    scene: Scene | undefined;
    modules: Modules | undefined;
    private rangeNear;
    private rangeFar;
    private camera;
    private fov;
    private aspectRatio;
    private clock;
    private events;
    private stats;
    private renderer;
    private screenWidth;
    private screenHeight;
    private freezeAnimate;
    private _cameraTween;
    constructor(opts: IWorld);
    loadPhotoSpheres(photos: Photo[]): boolean;
    loadPointcloud(url: string, opts?: {
        queryString?: string;
        xhrInit?: RequestInit;
    }): Promise<PointCloudOctree[]>;
    reset(): void;
    dispose(): void;
    onWindowResize(): void;
    handleStart(): void;
    handleFitTopView(): void;
    handleRendererFocus(): void;
    /**
     * Add binds
     */
    binds(): void;
    addListeners(): void;
    removeListeners(): void;
    /**
     * Fits top view based on point clouds bounding box
     */
    fitTopView(): void;
    getCameraView(dist: number): {
        cam: Vector3;
        look: Vector3;
    };
    getScreenShot(saveAsFile?: boolean): boolean | string;
    tweenCamera(camPos: Vector3, lookAt: Vector3, duration: number | undefined, easingIn: any, opts?: {
        keepCameraLevel: boolean;
        levelOffset: number;
    }): void;
    flyTo(location: Vector3, useGeoCoords?: boolean, durationMs?: number, easingIn?: number, distPercent?: number, levelOpts?: {
        keepCameraLevel: boolean;
        levelOffset: number;
    }): void;
    flyToDefined(camPos: Vector3, lookAt: Vector3, useGeoCoords: boolean, durationMs: number, easingIn: any, levelOpts?: {
        keepCameraLevel: boolean;
        levelOffset: number;
    }): void;
    setClipMode(value: number): void;
    setClippingPlanes(planes: Plane[]): void;
    /**
     * Main render loop. Calls modules.render().
     */
    render(): void;
    /**
     * Main update loop. Calls modules and Tweening.
     */
    update(): void;
    /**
     * Animate loop
     */
    animate(): void;
    /**
     * Start looping
     */
    start(): void;
}

interface Init {
    accessToken?: string;
    domEl: HTMLElement;
    showStats?: boolean;
    preserveDrawingBuffer?: boolean;
    referenceFrame?: ReferenceFrame;
}
declare const init: (opts: Init) => World;
declare const fitView: (object: Object3D, direction: Vector3, camera: PerspectiveCamera, controls: any, referenceFrame: ReferenceFrame) => void;

interface IDxfFile {
    referenceFrame: ReferenceFrame;
}
/** DxfFile */
declare class DxfFile {
    toGeo: (data: Vector3 | Object3D | {
        x: number;
        y: number;
        z: number;
    }) => Vector3;
    header: string;
    body: string;
    footer: string;
    entitiesBegin: string;
    entityEnd: string;
    vertexBegin: string;
    vertexEnd: string;
    vertex: string;
    pointEnt: string;
    points: any;
    lines: any;
    polygons: any;
    xmin: number;
    ymin: number;
    zmin: number;
    xmax: number;
    ymax: number;
    zmax: number;
    constructor(props: IDxfFile);
    dispose(): void;
    setPoints(points: any): void;
    setLines(lines: any): void;
    setPolygons(polygons: any): void;
    addPoint(point: any): void;
    addLine(line: any): void;
    addPolygon(polygon: any): void;
    updateExtremes(p: Vector3): void;
    getData(): string | undefined;
    /**
     * Clears Points, Lines and Polygons
     */
    reset(): void;
}

/**
 * adapted from http://stemkoski.github.io/Three.js/Sprite-Text-Labels.html
 * and https://raw.githubusercontent.com/potree/potree/develop/src/TextSprite.js
 */

interface IRGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}
/** TextSprite extends THREE.Object3D */
declare class TextSprite extends Object3D {
    material: SpriteMaterial;
    sprite: Sprite;
    borderThickness: number;
    fontface: string;
    fontsize: number;
    borderColor: IRGBA;
    backgroundColor: IRGBA;
    textColor: IRGBA;
    text: string;
    constructor();
    setText(text: string): void;
    setTextColor(color: IRGBA): void;
    setBorderColor(color: IRGBA): void;
    setBackgroundColor(color: IRGBA): void;
    /**
     * Updates sprite
     */
    update(): void;
    roundRect(ctx: Context, x: number, y: number, w: number, h: number, r: number): void;
}

/** Mixed format transformations */
declare class Transformations {
    getPotreeProfileFromBBox(boundingbox: Box3 | Object3D): any;
}

export { AreaMeasurement, Controls, CustomMath, DistanceMeasurement, DxfFile, ElevationRangePicker, Events, Init, LineTool, Lines, MeasurementTool, Modules, PhotoSpheres, Photos, PointClouds, PointMeasurement, PointTool, Points, PolygonTool, Polygons, index as Potree, ReferenceFrame, SectionTool, TextSprite, Transformations, World, init as default, fitView, init };
