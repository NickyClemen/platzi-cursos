# Selection sort.
# Es un algoritmo un poco más eficiente que Bubble Sort.
# Lineamientos:
#  1) Siempre que se esté ordenando de menor a mayor, siempre va a encontrar el número más chico, y lo va a mandar
#   al inicio. La poición que reemplaza, lo manda al final.
# 2) Se tienen dos arrays dentro del mismo. El primero, es el que se crea ordenado, y el array desordenado.
# Se va restando un índice al array desordenado para saber que se va achicando.
# Selection sort tiene un mejor rendimiento porque, a diferencia de Bubble Sort, no tiene ciclos de más.
# No hay que el tiempo de ejecución, sino guiarse por Big O notation.

import sys
from datetime import datetime
array = [
    739, 7123, 4055, 62, 5371, 1542, 2657, 3863, 2290, 3442, 2900, 1064, 2427, 4063, 2825, 993, 7406, 7245, 3761, 6190, 6382, 1736,
    3280, 2146, 564, 1058, 763, 2158, 4093, 1527, 4704, 6714, 3791, 344, 4061, 273, 4328, 1551, 1203, 3745, 5876, 6630, 7461, 5091,
    3165, 2385, 1853, 5145, 1102, 5432, 7367, 3396, 7513, 3260, 2428, 3521, 1123, 1345, 5061, 529, 4564, 2641, 3500, 2650, 5544, 7134,
    5474, 1905, 5948, 3745, 5965, 5616, 1668, 5345, 6293, 5523, 3331, 1466, 6769, 778, 4729, 2860, 6732, 524, 1912, 1317, 7337, 4843,
    4057, 5108, 7483, 5144, 3047, 4262, 1852, 6379, 5961, 4663, 2940, 6989, 5016, 5712, 4892, 1280, 5421, 5491, 6239, 115, 6200, 815, 6181, 1295,
    2248, 41, 694, 4319, 5750, 3366, 147, 6999, 5810, 4414, 5729, 6757, 3188, 2465, 6021, 2315, 3060, 2697, 3102, 3857, 5708, 3924, 1121, 3864, 2263,
    167, 7278, 4611, 1528, 2687, 369, 7391, 5749, 7090, 6428, 3757, 2929, 5391, 5686, 2916, 1352, 363, 6781, 4354, 276, 4591, 4012, 3192, 3812, 3840,
    3264, 4074, 5296, 5729, 1832, 6232, 5947, 7145, 6874, 6301, 2947, 7126, 5796, 156, 2860, 6962, 442, 7022, 6539, 6159, 2093, 4643, 6665, 363, 4994,
    2779, 5090, 5243, 6801, 1451, 245, 4845, 197, 2712, 6061, 7507, 2300, 1956, 157, 3778, 4003, 3365, 849, 371, 2133, 4007, 4523, 2875, 7426, 4538,
    3755, 72, 459, 1592, 2818, 1934, 5280, 4593, 6514, 169, 4687, 1521, 98, 7351, 6890, 1974, 5219, 2640, 6817, 1109, 4261, 1117, 4591, 7139, 5197,
    932, 3485, 6443, 3841, 1520, 1191, 2064, 415, 3230, 7084, 1368, 1836, 1789, 5095, 165, 5517, 686, 6692, 1996, 5991, 3385, 5617, 6799, 2680, 5650,
    3651, 1001, 1950, 464, 1476, 1716, 229, 7245, 6256, 7540, 2484, 4337, 98, 2868, 2947, 86, 2407, 4765, 5788, 2774, 3968, 3409, 4396, 2897, 5896,
    2544, 5920, 2886, 5659, 7295, 7540, 10, 7260, 1009, 5651, 321, 2464, 638, 5849, 6092, 4874, 4522, 1897, 7362, 5024, 3460, 6000, 2490, 6022,
    4718, 1033, 5275, 4825, 7519, 6145, 4399, 142, 169, 6748, 5675, 5817, 4231, 5525, 6716, 3761, 3282, 1282, 5390, 1190, 2221, 5610, 5214, 2590,
    1705, 4452, 4892, 4228, 4496, 3613, 1501, 991, 6162, 5284, 4023, 776, 2041, 4538, 884, 2140, 3919, 3127, 3684, 1884, 2165, 7017, 4270, 5605,
    290, 755, 312, 3841, 3670, 7219, 4099, 6236, 7125, 3408, 1115, 3182, 5657, 3813, 619, 1916, 3214, 5230, 1391, 2901, 721, 5224, 6548, 6836, 6308,
    2878, 4610, 1578, 2998, 2709, 2008, 7014, 2396, 543, 5163, 848, 774, 17, 3274, 3255, 5993, 398, 5540, 6160, 428, 3523, 3891, 6034, 7078, 2850,
    3998, 6058, 3748, 4099, 1657, 1533, 2949, 3575, 6374, 3503, 5574, 1702, 5061, 2128, 3774, 1074, 5531, 2719, 5888, 1992, 4178, 5957, 4053, 763,
    2808, 3388, 5489, 6660, 1159, 6901, 4008, 5349, 3022, 3628, 1715, 5293, 5445, 6497, 5516, 7416, 3499, 3128, 5917, 7528, 6293, 7538, 2220, 2657,
    4930, 353, 3901, 5679, 3753, 5716, 4481, 7130, 2981, 4908, 521, 6215, 776, 5390, 4136, 87, 5870, 6585, 7165, 7118, 33, 5828, 1292, 5144, 6658,
    7211, 1662, 2644, 3716, 5449, 5255, 4750, 5887, 3551, 105, 2083, 6514, 4569, 6297, 1885, 789, 2303, 4356, 6079, 6052, 3021, 5356, 7038, 4009,
    1829, 4763, 7430, 5126, 682, 3939, 2185, 6502, 4075, 495, 1635, 4325, 6085, 512, 1341, 7363, 5887, 1061, 3211, 6015, 4560, 4401, 6759, 2831,
    3796, 7567, 4916, 4409, 845, 7316, 7293, 4548, 4747, 870, 5827, 2770, 6316, 2697, 3141, 355, 460, 1197, 718, 2343, 6955, 2339, 1448, 3565,
    3637, 2868, 3001, 7516, 323, 3352, 718, 7171, 3107, 4087, 7499, 1229, 1710, 359, 2002, 5325, 5101, 6164, 4553, 6327, 2318, 4245, 7046, 6484,
    6724, 6107, 2740, 6726, 4061, 729, 1432, 4122, 5347, 6727, 2293, 3420, 5487, 368, 5074, 34, 3815, 7401, 5537, 2162, 4217, 2375, 5704, 7041,
    5958, 4807, 44, 2012, 4566, 2985, 5633, 685, 46, 6490, 560, 1243, 5028, 7119, 29, 5340, 1482, 4856, 5668, 2706, 1241, 3606, 4600, 4182, 2713,
    789, 5127, 2655, 4505, 1359, 2535, 5710, 4677, 3202, 3245, 3334, 6700, 2982, 4651, 273, 3765, 2555, 3364, 6895, 4989, 6302, 5219, 739, 3921,
    1705, 1733, 5015, 5052, 5146, 3351, 4766, 7461, 431, 96, 4183, 5610, 6129, 6744, 4062, 7344, 1575, 6100, 107, 6613, 6506, 3140, 4258, 7090,
    2183, 1664, 2971, 4860, 2937, 7361, 3314, 7416, 6914, 540, 5126, 4288, 1833, 2814, 2065, 3811, 5414, 6195, 5900, 825, 3541, 2153, 16, 1518,
    6396, 7273, 7396, 2229, 1319, 917, 7200, 6669, 2419, 6839, 3903, 3030, 65, 4521, 2699, 2103, 6591, 4854, 2745, 1031, 5861, 6305, 4467, 7067,
    1853, 416, 5088, 4578, 5733, 5593, 3961, 4464, 7184, 3051, 2008, 2795, 5921, 142, 3295, 2952, 7170, 1035, 1482, 80, 595, 3144, 4369, 1059,
    1344, 4168, 3245, 6895, 5899, 3807, 5643, 6069, 955, 1163, 5771, 5815, 6162, 454, 991, 7356, 5507, 3882, 3858, 3744, 1666, 221, 6845, 4890,
    6199, 5469, 3703, 3998, 2695, 2571, 5488, 5659, 222, 7304, 6034, 5368, 1213, 4852, 5690, 6756, 27, 231, 4129, 1835, 7111, 828, 7157, 6326,
    2545, 2625, 7557, 5037, 390, 7436, 1097, 6000, 1995, 2761, 413, 4403, 6576, 4962, 4722, 5902, 3405, 92, 4191, 5371, 289, 7289, 6332, 5299,
    6917, 1903, 2245, 6237, 3771, 1725, 7400, 513, 4131, 2286, 3556, 1042, 7040, 140, 6154, 1635, 5869, 4323, 5963, 269, 6289, 3337, 5161, 2334,
    2245, 3959, 746, 6733, 1635, 7006, 708, 3506, 1131, 3676, 7023, 3985, 6791, 471, 748, 2545, 5116, 1629, 279, 7059, 3334, 36, 7388, 6298, 6830,
    3479, 473, 1176, 3375, 5480, 522, 3983, 3531, 136, 5316, 1491, 5021, 863, 2819, 3853, 3452, 2796, 2441, 3981, 7448, 1122, 1319, 4968, 3854,
    7264, 3126, 5500, 5072, 2408, 218, 6050, 4432, 4563, 5714, 1393, 1172, 2570, 4045, 7532, 322, 2881, 6186, 2152, 101, 4664, 2756, 1790, 1080,
    7084, 5940, 2024, 7313, 1668, 5543, 7560, 3650, 5117, 6935, 5170, 834, 1848, 47, 3633, 6708, 1903, 378, 479, 6668, 2777, 7013, 1542, 5033,
    3295, 1784, 7547, 2841, 4643, 4191, 2860, 6851, 3715, 3723, 884, 7083, 3420, 1890, 174, 1933, 786, 2327, 2293, 6807, 1880, 4517, 6923, 7128,
    5267, 3863, 2343, 3770, 1123, 3122, 2450, 6627, 4170, 1450, 5790, 5217, 1499, 3201, 5367, 3593, 64, 2544, 6623, 6743, 4762, 4791, 910, 1666,
    714, 7248, 533, 5767, 1328, 2151, 6673, 6524, 3108, 7082, 4989, 4839, 620, 5702, 4833, 6903, 6798, 5827, 6731, 1336, 3841, 7357, 2176, 1736,
    1604, 5430, 679, 7256, 4441, 7509, 3335, 4461, 2910, 7039, 2507, 361
]

def selectionSort(array):
    # Recorre el array.
    for i in range(len(array)):
        # Encuentra el valor mínimo dentro del array. Es importante saber en qué índice se quedó el array
        # desordenado.
        idxDes = i;
        for j in range(i + 1, len(array)):
            if array[idxDes] > array[j]:
                idxDes = j
        # Al encontrar el valor mínimo, reemplazar.
        array[i], array[idxDes] = array[idxDes], array[i]

tiempoInicial = datetime.now()
selectionSort(array)

print("Arreglo ordenado de forma ascendente es ")

for i in range(len(array)):
    print("%d"%array[i])

print (datetime.now() - tiempoInicial),