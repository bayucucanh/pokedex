export interface Pokemon {
  id: number;
  name: string;
  type: string;
  types: any[]; // Ganti dengan tipe yang lebih spesifik jika diperlukan
  imgUrl: string;
}
