// my Sharp Ratio calculator

const dailyPrices = [
    27.85,
    27.92,
    27.77,
    28.28,
    28.27,
    28.41,
    27.08,
    26.83,
    27.67,
    28.13,
    26.97,
    26.46,
    26.55,
    26.75,
    27.75,
    26.73,
    26.36,
    26.67,
    26.27,
    26.19,
    25.74,
    25.79,
    26.31,
    26.26,
    26.49,
    26.32,
    26.32,
    25.69,
    25.43,
    25.48,
    25.87,
    26.42,
    26.58,
    26.26,
    25.93,
    25.96,
    26.37,
    26.42,
    26.87,
    27.18,
    27.56,
    28.22,
    28.01,
    27.93,
    27.92,
    27.62,
    27.17,
    27.16,
    27.62,
    27.74,
    28.03,
    27.95,
    27.87,
    27.49,
    27.51,
    27.14,
    27.08,
    27.59,
    27.67,
    27.74,
    28.17,
    28.15,
    28.85,
    28.72,
    28.78,
    28.69,
    29.05,
    29.04,
    29.16,
    29.03,
    28.48,
    28.73,
    28.48,
    28.88,
    29.16,
    29.16,
    29.05,
    28.61,
    29.67,
    29.39,
    29.66,
    29.72,
    29.59,
    29.37,
    29.45,
    29.2,
    29.29,
    28.5,
    28.23,
    28.58,
    28.18,
    28.24,
    28.09,
    28.36,
    28.32,
    28.06,
    28.66,
    28.65,
    28.6,
    29.03,
    29.26,
    29.14,
    29.09,
    29.05,
    28.93,
    28.81,
    28.47,
    28.38,
    28.5,
    28.79,
    28.82,
    29.02,
    29.22,
    29.41,
    28.97,
    29.08,
    28.99,
    28.7,
    28.58,
    28.92,
    29.16,
    29.38,
    29.72,
    29.29,
    28.98,
    29.32,
    28.67,
    28.78,
    28.74,
    28.79,
    28.34,
    28.43,
    28.69,
    28.79,
    28.11,
    28.55,
    27.97,
    27.15,
    26.59,
    26.82,
    26.43,
    26.15,
    25.49,
    25.97,
    26.25,
    26.56,
    27.12,
    26.92,
    26.96,
    27.37,
    27.39,
    27.44,
    27.88,
    27.69,
    27.63,
    27.22,
    27.03,
    26.98,
    27.3,
    27.44,
    27.29,
    27.19,
    27.15,
    26.75,
    26.68,
    26.78,
    26.67,
    26.8,
    26.89,
    26.98,
    26.94,
    27.02,
    26.62,
    26.61,
    26.49,
    26.79,
    26.19,
    26.28,
    26.6,
    26.23,
    26.34,
    25.86,
    25.62,
    24.7,
    25.18,
    25.49,
    25.75,
    26.17,
    26.46,
    26.37,
    26.63,
    26.44,
    26.45,
    26.25,
    26.17,
    25.62,
    25.03,
    24.99,
    25.07,
    24.74,
    24.56,
    24.74,
    24.97,
    25.02,
    25.33,
    25.28,
    25.83,
    26.65,
    26.92,
    26.69,
    25.86,
    25.43,
    25.46,
    26.65,
    26.35,
    26.39,
    26.07,
    26.31,
    26.48,
    26.32,
    26.77,
    26.73,
    27.07,
    27.38,
    27.07,
    26.91,
    27.07,
    26.87,
    26.52,
    26.73,
    27.12,
    27.7,
    27.84,
    28.49,
    28.6,
    28.59,
    28.69,
    28.31,
    28.36,
    27.67,
    27.48,
    27.7,
    27.29,
    27.65,
    27.47,
    27.9,
    27.82,
    27.94,
    27.86,
    28.43,
    27.86,
    27.68,
    27.34,
    27.53,
    27.32,
    27.05,
    26.7,
    26.76,
    26.78,
    27.01,
    26.96,
    26.93,
    26.88,
    26.45,
    26.55,
    26.62,
    26.13,
    26.7,
    26.63,
    26.89,
    27.28,
    28.18,
    27.77,
    27.68,
    27.45,
    26.87,
    26.9,
    27.04,
    26.54,
    26.21,
    26.54,
    26.91,
    26.79,
    26.45,
    26.48,
    26.92,
    26.69,
    26.62,
    26.87,
    26.96,
    27.13,
    27.01,
    26.62,
    26.99,
    26.99,
    26.61,
    26.7,
    26.96,
    27.02,
    26.84,
    26.67,
    26.34,
    26.33,
    26.83,
    26.73,
    26.62,
    26.36,
    26.41,
    26.46,
    26.84,
    26.83,
    26.91,
    27.02,
    26.89,
    26.76,
    26.58,
    26.08,
    26.03,
    26.09,
    26.17,
    26.14,
    26.25,
    25.84,
    26.03,
    26.51,
    27.33,
    28.06,
    28.01,
    28.99,
    33.65,
    33.15,
    33.12,
    33.1,
    32.21,
    31.18,
    31.36,
    31.4,
    31.6,
    31.63,
    31.28,
    31.56,
    31.46,
    32.19,
    32.13,
    31.77,
    31.69,
    33.04,
    32.98,
    32.82,
    32.86,
    33.04,
    32.81,
    33.05,
    32.34,
    30.62,
    29.48,
    29.1,
    31.43,
    31.88,
    31.52,
    30.91,
    29.89,
    30.72,
    30.31,
    30.04,
    30.73,
    30.64,
    31.07,
    31.29,
    31.16,
    31.76,
    31.8,
    32.15,
    31.46,
    31.77,
    31.13,
    31.12,
    31.29,
    30.6,
    29.74,
    29.75,
    30.42,
    30.56,
    31.35,
    32.07,
    32.27,
    32.12,
    31.96,
    32.18,
    32.33,
    32.62,
    32.56,
    33.09,
    33.11,
    33.31,
    32.51,
    32.13,
    32.59,
    35.1,
    35.64,
    35.42,
    35.65,
    35.85,
    35.54,
    36.06,
    36.11,
    36.41,
    36.56,
    36.69,
    36.24,
    36.42,
    36.77,
    36.56,
    35.85,
    36.45,
    36.27,
    37,
    36.92,
    37.83,
    37.8,
    37.41,
    37.41,
    37.51,
    37.13,
    38.35,
    38.12,
    37.63,
    38.34,
    38.16,
    38.12,
    37.58,
    37.47,
    36.94,
    37.39,
    37.17,
    37.9,
    37.47,
    36.97,
    37.39,
    37.5,
    37.52,
    37.42,
    38.13,
    38.83,
    38.55,
    37.94,
    37.09,
    37.13,
    37.18,
    36.32,
    35.72,
    35.8,
    36.3,
    35.03,
    35.74,
    34.72,
    35.09,
    34.92,
    35.33,
    36.26,
    35.58,
    35.65,
    35,
    36.55,
    37.15,
    37.6,
    38.23,
    36.35,
    35.4,
    34.18,
    34.14,
    33.91,
    34.21,
    34.16,
    34.12,
    34.55,
    35.42,
    34.87,
    35.05,
    35.32,
    34.79,
    34.98,
    35.29,
    35.25,
    34.89,
    35.94,
    35.94,
    35.62,
    35.54,
    34.76,
    34.7,
    35.26,
    35.64,
    36.34,
    36.52,
    36.42,
    36.8,
    36.89,
    36.88,
    37.1,
    37.04,
    36.9,
    36.77,
    36.68,
    37.24,
    37.53,
    37.25,
    37.5,
    37.26,
    36.89,
    37.28,
    37.01,
    36.96,
    36.81,
    37.15,
    37.59,
    37.66,
    37.95,
    38.33,
    37.7,
    37.63,
    37.96,
    35.94,
    36.16,
    35.41,
    35.29,
    34.55,
    34.65,
    34.91,
    34.62,
    34.78,
    35.07,
    35.56,
    35.65,
    36.16,
    35.76,
    35.67,
    35.54,
    35.82,
    35.31,
    35.33,
    35.02,
    35.49,
    35.21,
    36,
    36.26,
    36.21,
    36.63,
    36.79,
    36.71,
    36.52,
    36.12,
    35.83,
    35.83,
    36.41,
    36.43,
    35.97,
    35.92,
    35.91,
    35.95,
    35.52,
    34.59,
    34.69,
    34.8,
    34.87,
    35.09,
    33.76,
    33.41,
    34,
    34.21,
    34.6,
    34.96,
    34.72,
    34.89,
    34.77,
    35.28,
    35.75,
    36.03,
    35.85,
    36.05,
    35.99,
    36.69,
    36.85,
    37.06,
    36.93,
    37.14,
    36.99,
    36.92,
    37.09,
    37.3,
    38.44,
    38.64,
    38.55,
    38.66,
    38.58,
    39.11,
    39.09,
    39.21,
    39.23,
    39.24,
    39.16,
    39.12,
    38.86,
    39,
    38.88,
    38.77,
    38.61,
    38.6,
    38.48,
    38.47,
    38.48,
    38.61,
    38.45,
    38.35,
    38.44,
    38.57,
    39,
    39.02,
    38.77,
    37.98,
    38.45,
    37.98,
    38.12,
    38.59,
    38.44,
    38.28,
    38.57,
    38.81,
    39.36,
    39.35,
    38.71,
    39.15,
    39.08,
    38.75,
    38.86,
    38.63,
    38.82,
    38.82,
    38.84,
    38.75,
    39.3,
    39.15,
    39.31,
    38.91,
    38.93,
    39,
    39.76,
    40.08,
    39.85,
    39.97,
    40.66,
    40.38,
    39.95,
    39.77,
    39.77,
    39.23,
    39.18,
    38.44,
    38.11,
    38.1,
    39.13,
    39.53,
    39.27,
    38.13,
    37.7,
    36.8,
    37.92,
    38.22,
    38.56,
    38.03,
    38.46,
    38.41,
    38.05,
    38.08,
    38.41,
    38.54,
    37.9,
    37.4,
    37.53,
    38.13,
    37.96,
    38.56,
    38.82,
    39.46,
    39.46,
    39.81,
    39.85,
    39.89,
    39.54,
    39.71,
    39.82,
    39.73,
    39.56,
    39.5,
    39.58,
    39.25,
    39.14,
    38.59,
    39.31,
    39.35,
    39.7,
    40.31,
    40.33,
    40.24,
    40.4,
    40.32,
    40.39,
    40.23,
    40.3,
    40.11,
    40.25,
    40.97,
    41.19,
    41.78,
    41.61,
    41.17,
    40.12,
    39.84,
    39.78,
    39.93,
    40.07,
    40.07,
    40.35,
    40.42,
    40.48,
    40.68,
    40.96,
    41.02,
    40.95,
    41.21,
    41.4,
    41.58,
    41.54,
    41.57,
    41.43,
    41.46,
    41.16,
    41.76,
    41.53,
    41.45,
    41.39,
    41.6,
    41.77,
    41.93,
    42.16,
    42.28,
    42.28,
    42.36,
    42.44,
    42.61,
    42.42,
    41.52,
    41.48,
    40.88,
    40.72,
    40.98,
    41.05,
    41.57,
    41.58,
    41.48,
    41.93,
    41.73,
    41.57,
    41.39,
    41.23,
    41.24,
    41.17,
    41.22,
    41.18,
    41.86,
    41.84,
    41.91,
    42.08,
    42.16,
    43.14,
    43.62,
    43.59,
    43.71,
    45.3,
    45.63,
    45.82,
    46.35,
    46.58,
    46.36,
    46.72,
    46.61,
    46.44,
    46.53,
    46.61,
    46.85,
    47.15,
    45.98,
    46.51,
    46.7,
    47.09,
    47.44,
    47.75,
    48.48,
    48.57,
    48.79,
    48.24,
    48.35,
    48.78,
    49.18,
    48.83,
    49.05,
    49.17,
    47.49,
    47.15,
    47.67,
    47.54,
    47.12,
    46.99,
    47.87,
    47.53,
    47.97,
    47.85,
    48.28,
    47.61,
    46.37,
    47.02,
    45.89,
    45.44,
    44.94,
    45.59,
    45.33,
    45.93,
    46.44,
    46.5,
    47.19,
    47.36,
    47.8,
    47.67,
    48.27,
    48.54,
    48.41,
    48.65,
    49.02,
    47.54,
    47.39,
    46.7,
    47.08,
    46.53,
    46.54,
    46.52,
    46.18,
    46.4,
    46.47,
    46.34,
    46.15,
    45.36,
    45.72,
    46.13,
    46.11,
    46.35,
    45.55,
    45.53,
    45.33,
    46.23,
    46.35,
    46.06,
    45.79,
    45.69,
    46.06,
    46.48,
    46.97,
    46.87,
    46.42,
    46.39,
    46.8,
    46.33,
    46.45,
    46.6,
    46.75,
    46.26,
    46.01,
    45.75,
    46.09,
    46.58,
    46.62,
    46.43,
    46.05,
    46.24,
    47.22,
    47.48,
    47.96,
    47.66,
    47.89,
    47.58,
    48.5,
    48.94,
    48.85,
    48.63,
    49.46,
    49.39,
    49.48,
    49.6,
    49.61,
    49.64,
    49.22,
    49.41,
    48.42,
    48.53,
    48.67,
    48.63,
    50.96,
    50.86,
    50.83,
    51.28,
    51.28,
    51.62,
    51.3,
    51.67,
    51.99,
    51.56,
    51.4,
    51.29,
    51.3,
    51.05,
    51.63,
    50.95,
    50.92,
    51.72,
    51.8,
    52.03,
    52.71,
    52.37,
    51.08,
    51.07,
    50.51,
    49.93,
    50.26,
    50.92,
    51.55,
    51.85,
    52.06,
    52.02,
    52.03,
    52.46,
    53.21,
    53.86,
    53.53,
    53.25,
    53.18,
    53.01,
    52.84,
    52.47,
    52.41,
    52.32,
    53.25,
    54.12,
    54.32,
    55.11,
    55.35,
    55.31,
    55.13,
    55.28,
    56.11,
    56.09,
    56.6,
    56.49,
    56.88,
    57.79,
    58.5,
    58.21,
    58.52,
    58.79,
    58.78,
    58.18,
    58.5,
    58.39,
    55.6,
    52.79,
    54.03,
    52.43,
    50.08,
    51.89,
    52.6,
    52.61,
    53.49,
    54.48,
    54.74,
    55.12,
    55.57,
    55.33,
    56.34,
    57.19,
    55.91,
    55.24,
    53.48,
    53.95,
    54.55,
    54.75,
    55.48,
    56.3,
    58,
    58.23,
    56.91,
    57.47,
    57.48,
    56.79,
    54.99,
    54.89,
    54.54,
    52.45,
    51.08,
    52.66,
    50.26,
    50.23,
    51.59,
    50.32,
    50.67,
    51.26,
    51.39,
    50.35,
    50.77,
    51.58,
    51,
    51.63,
    51.46,
    51.9,
    53.71,
    53.6,
    54.39,
    53.65,
    53.37,
    51,
    51.06,
    52,
    51.5,
    50.87,
    51.87,
    51.22,
    51.19,
    52.41,
    52.74,
    52.7,
    54.14,
    54.88,
    54.91,
    55.01,
    53.96,
    54.09,
    53.93,
    53.32,
    53.98,
    53.49,
    53.98,
    53.96,
    53.78,
    53.02,
    53.39,
    54.25,
    55.98,
    56.96,
    56.98,
    56.84,
    56.19,
    56.04,
    56.5,
    56.97,
    56.74,
    57.61,
    57.61,
    58.67,
    58.4,
    58.49,
    57.88,
    57.77,
    56.24,
    55.92,
    55.2,
    55.71,
    55.78,
    56.37,
    55.14,
    56.21,
    57.01,
    57.7,
    57.64,
    57.7,
    59.17,
    59.44,
    59.19,
    59.94,
    59.79,
    59.35,
    59.25,
    60.28,
    62.4,
    63.19,
    63.42,
    61.93,
    60.99,
    60.86,
    61,
    61.31,
    61.19,
    61.24,
    62.11,
    62.28,
    62.46,
    61.88,
    61.75,
    62.11,
    60.72,
    60.32,
    60.05,
    60.39,
    60.08,
    60.37,
    60.27,
    61.03,
    62.09,
    61.56,
    62.47,
    61.96,
    60.91,
    59.85,
    59.32,
    58.57,
    58.24,
    58.23,
    58.87,
    58.14,
    58.77,
    58.63,
    57.8,
    58.06,
    58.55,
    59.34,
    58.3,
    58.67,
    59.23,
    59.02,
    59.73,
    59.67,
    59.77,
    60.01,
    60.15,
    58.41,
    57.87,
    57.45,
    56.94,
    54.06,
    53.97,
    55.5,
    54.61,
    56.06,
    55.78,
    54.4,
    54.82,
    55.06,
    55.18,
    52.54,
    54.78,
    53.57,
    51,
    51.81,
    53.84,
    53.5,
    52.89,
    52,
    52.79,
    54.67,
    54.12,
    53.31,
    51.93,
    51.8,
    52.18,
    53.24,
    53.07,
    51,
    51.29,
    51.88,
    51.19,
    52.43,
    52.22,
    54.31,
    54.42,
    54.72,
    55.32,
    52.54,
    53.44,
    51.83,
    51.98,
    52.59,
    53.18,
    53.1,
    52.11,
    50.83,
    51.44,
    51.15,
    50.47,
    48.98,
    48.81,
    51.97,
    52.19,
    51.85,
    51.78,
    52.29,
    50.8,
    53.54,
    53.42,
    53.81,
    53.73,
    53.52,
    52.86,
    52.23,
    53.86,
    54.05,
    54.5,
    54.91,
    53.53,
    53.78,
    53.7,
    54.55,
    53.5,
    53.03,
    54.45,
    55.82,
    55.54,
    56.64,
    57.3,
    55.76,
    54.94,
    54.75,
    54.75,
    56.07,
    56.01,
    56.08,
    55.68,
    55.93,
    55.69,
    54.85,
    55.52,
    55.47,
    55.76,
    55.8,
    56,
    57.05,
    57.39,
    58.1,
    57.89,
    57.17,
    57.12,
    58.79,
    59.66,
    59.67,
    59.28,
    59.22,
    59.21,
    59.94,
    61.2,
    61.58,
    60.28,
    59.65,
    59.23,
    58.65,
    58.42,
    58.67,
    59.72,
    60.02,
    60.3,
    60.75,
    60.36,
    60.19,
    59.86,
    60.11,
    60.23,
    60.89,
    61.06,
    61.36,
    61.82,
    61.82,
    62.44,
    63.23,
    62.8,
    63.17,
    63.61,
    64.38,
    59.42,
    58.4,
    58.13,
    59.27,
    59.47,
    58.71,
    58.31,
    58.12,
    58.21,
    56.6,
    56.02,
    58.21,
    58.95,
    58.12,
    56.94,
    57.48,
    57.57,
    57.04,
    56.67,
    56.71,
    55.82,
    55.9,
    55.18,
    51.81,
    52.65,
    52.11,
    52.22,
    53.3,
    54.02,
    53.94,
    53.85,
    54.44,
    54.27,
    54.63,
    55.18,
    55.12,
    55.57,
    56.09,
    55.78,
    54.32,
    53.99,
    53.8,
    54.05,
    54.9,
    55.56,
    56.08,
    56.58,
    55.82,
    56.24,
    57.02,
    57.21,
    57.25,
    57.52,
    57.68,
    57.32,
    57.32,
    56.51,
    56.9,
    57.31,
    56.89,
    56.61,
    62.52,
    61.97,
    61.26,
    60.83,
    60.45,
    59.7,
    57.62,
    58.5,
    58.7,
    60.24,
    59.4,
    58.74,
    59.86,
    58.21,
    58.36,
    58.88,
    59.92,
    59.13,
    59.56,
    59.48,
    57.56,
    58.44,
    58.39,
    58.55,
    59.64,
    59.41,
    58.42,
    59.07,
    60.57,
    60.25,
    60.22,
    60.3,
    61.01,
    61.71,
    61.98,
    61.57,
    61.46,
    61.62,
    61.94,
    61.5,
    61.7,
    60.94,
    62.33,
    62.07,
    61.25,
    60.95,
    60.26,
    58.83,
    59.39,
    60.45,
    60.38,
    59.46,
    60.12,
    60.43,
    60.77,
    60.86,
    62.15,
    62.18,
    62.65,
    62.27,
    62.31,
    62.14,
    62.96,
    63.05,
    63.26,
    64.5,
    63.13,
    63.06,
    63.01,
    63.69,
    64.57,
    64.6,
    64.59,
    65.44,
    65.57,
    64.96,
    64.94,
    64.9,
    65.57,
    66.74,
    66.04,
    65.77,
    65.15,
    65.07,
    64.77,
    65.33,
    65.68,
    65.65,
    65.25,
    64.5,
    64.76,
    66.03,
    66.41,
    67.03,
    67.18,
    67.23,
    67.25,
    67.51,
    67.39,
    68.06,
    67.76,
    67.63,
    67.8,
    67.48,
    67.44,
    67.18,
    68.02,
    67.59,
    66.81,
    66.85,
    68.37,
    68.03,
    69.71,
    69.67,
    70.22,
    70.99,
    71.49,
    71.96,
    71.54,
    71.96,
    72.58,
    74.02,
    74.22,
    74.3,
    74.33,
    73.34,
    71.69,
    72.63,
    72.93,
    72.79,
    71.71,
    74.3,
    72.35,
    72.41,
    73.81,
    73.96,
    75.43,
    75.44,
    75.91,
    75.73,
    76.04,
    75.98,
    76.33,
    75.91,
    74.26,
    71.08,
    69.42,
    69.66,
    65.9,
    66.97,
    69.46,
    67.07,
    69.33,
    65.95,
    64.92,
    60.78,
    64.02,
    60.77,
    55.75,
    60.99,
    54.22,
    55.99,
    54.84,
    55.76,
    53.62,
    52.83,
    56.72,
    55.12,
    58.09,
    55.54,
    57.34,
    58.14,
    55.28,
    56.04,
    54.89,
    59.35,
    59.33,
    60.51,
    60.57,
    60.88,
    63.46,
    63.12,
    63.17,
    64.16,
    63.33,
    60.82,
    63.16,
    63.82,
    63.97,
    63.79,
    61.68,
    67.07,
    67.43,
    66.03,
    66.34,
    67.56,
    67.36,
    68.63,
    69.42,
    70.16,
    68.79,
    67.47,
    67.81,
    68.66,
    69.2,
    68.67,
    70.34,
    70.14,
    70.52,
    70.85,
    70.89,
    70.84,
    71.45,
    71.59,
    71.96,
    71.82,
    70.61,
    71.92,
    72.33,
    72.81,
    73.29,
    70.19,
    70.66,
    70.99,
    72.14,
    72.56,
    71.8,
    71.59,
    72.59,
    73.22,
    71.6,
    72.07,
    68,
    69.75,
    70.68,
    71.9,
    73.24,
    74.79,
    74.26,
    74.8,
    75.55,
    77.09,
    75.57,
    76.03,
    75.68,
    75.9,
    75.78,
    78.29,
    77.92,
    78.42,
    75.78,
    75.59,
    76.51,
    75.02,
    76.1,
    76.57,
    74.15,
    73.72,
    73.25,
    73.68,
    75.01,
    74.72,
    74.81,
    74.02,
    75.33,
    75.92,
    75.39,
    75.9,
    77.93,
    77.38,
    79.09,
    79.02,
    79.41,
    80.41,
    82.62,
    81.72,
    82.22,
    81.71,
    83.04,
    86.41,
    82.09,
    79.55,
    76.62,
    77.85,
    76.6,
    76.04,
    75.96,
    77.07,
    76.05,
    74.78,
    73,
    71.56,
    73.27,
    70.76,
    71.41,
    72.25,
    73.23,
    73.47,
    73.48,
    74.5,
    72.92,
    74.3,
    72.67,
    73.01,
    74.3,
    75.76,
    78.46,
    78.58,
    78.4,
    77.96,
    78.65,
    76.73,
    77.8,
    79.67,
    80.77,
    82.05,
    79.52,
    80.21,
    75.83,
    78.36,
    81.05,
    81.3,
    82.51,
    87.46,
    88.17,
    88.09,
    88.15,
    87.02,
    87.64,
    87.49,
    88.85,
    89.07,
    88.51,
    87.34,
    88.2,
    87.11,
    86.74,
    88.44,
    88.57,
    89.66,
    88.04,
    89.91,
    91.4,
    91.34,
    91.4,
    90.97,
    90.93,
    89.21,
    88.77,
    89.09,
    88,
    88.39,
    88.15,
    87.4,
    86.55,
    86.97,
    86.18,
    86.62,
    86.94,
    88.8,
    87.94,
    86.98,
    87.59,
    86.41,
    87.05,
    86.76,
    89.36,
    90.36,
    88.34,
    87.33,
    87.72,
    87.01,
    86.81,
    89.54,
    94.35,
    94.56,
    95.05,
    94.97,
    95.86,
    91.54,
    93.16,
    91.79,
    95.07,
    96.38,
    103.5,
    103.12,
    104.9,
    104.65,
    104.18,
    104.77,
    104.79,
    105.21,
    106.1,
    106.42,
    105.86,
    105.06,
    103.24,
    103.54,
    104.76,
    101.57,
    101.84,
    104.08,
    103.79,
    101.34,
    102.45,
    105.43,
    101.21,
    102.64,
    102.75,
    105.74,
    103.1,
    103.32,
    104.63,
    104.55,
    101.81,
    102.16,
    101.93,
    102.65,
    102.25,
    102.22,
    101.78,
    102.8,
    102.78,
    103.43,
    106.89,
    111.28,
    111.24,
    112.48,
    113.27,
    114.29,
    112.74,
    113.36,
    112.74,
    114.83,
    114.89,
    115.12,
    114.68,
    114.66,
    113.4,
    115.77,
    116.34,
    115.36,
    119,
    121.49,
    120.51,
    119.76,
    117.71,
    117.84,
    119.07,
    119.93,
    117.08,
    115.44,
    111.95,
    113.1,
    115.81,
    116.07,
    115.17,
    115.44,
    117.8,
    117.26,
    120.33,
    120.45,
    121.68,
    120.13,
    120.58,
    121.49,
    121.06,
    120.23,
    122.59,
    123.3,
    124.14,
    124.57,
    126.08,
    125.7,
    126.35,
    126.03,
    125.7,
    126.37,
    125.57,
    126.46,
    127,
    126.46,
    127.28,
    127,
    126.82,
    126.02,
    125.32,
    126.37,
    128.72,
    129.77,
    130.08,
    129.18,
    129.57,
    130.56,
    130.99,
    132.08,
    131.27,
    131.85,
    129.25,
    131.1,
    132.6,
    133.33,
    137.82,
    139.64,
    136.8,
    136.38,
    136.54,
    135.22,
    135.99,
    136.28,
    136.03,
    136.94,
    137.04,
    138,
    138.1,
    137.69,
    138.39,
    138.41,
    138.92,
    137.3,
    136.57,
    136.91,
    138.44,
    141.1,
    142.4,
    142.95,
    142.12,
    144.55,
    145.47,
    145.46,
    145.84,
    144.22,
    144.78,
    145.52,
    144.88,
    144.91,
    141.92,
    143.47,
    143.41,
    145.21,
    144.37,
    141.46,
    139.02,
    139.65,
    140.94,
    141.83,
    142.63,
    141.5,
    136.18,
    134.52,
    133.27,
    136.46,
    133.76,
    136.18,
    137.35,
    139.19,
    140.06,
    138.85,
    136.71,
    137.9,
    141.41,
    141.68,
    142.96,
    143.82,
    142.42,
    142.78,
    138.63,
    138.77,
    139.67,
    146.43,
    146.13,
    148.27,
    143.77,
    145.86,
    146.79,
    148.68,
    149.24,
    149.35,
    149.25,
    146.63,
    146.75,
    149.65,
    149.39,
    149.08,
    149.06,
    150.71,
    149.95,
    147.08,
    146.76,
    146.72,
    142.81,
    146.11,
    142.45,
    141.62,
    143.78,
    142.52,
    143.8,
    148.04,
    148.72,
    148.11,
    148.68,
    146.7,
    144.97,
    147.37,
    144.84,
    142.8,
    142.4,
    144.22,
    146.95,
    147.14,
    148.06,
    146.45,
    146.5,
    146,
    144.68,
    145.07,
    144.42,
    137.65,
    137.55,
    137,
    138.57,
    140.02,
    141.65,
    139.13,
    139.79,
    136.29,
    135.65,
    133.51,
    130.09,
    130.37,
    126.74,
    129.24,
    129.12,
    133.29,
    135.7,
    137.88,
    148.04,
    142.65,
    143.02,
    138.94,
    139.21,
    141.45,
    138.6,
    134.13,
    135.3,
    136.43,
    137.49,
    132.31,
    130.47,
    129.4,
    127.59,
    132.67,
    134.52,
    134.89,
    134.17,
    134.75,
    134.31,
    132.12,
    126.46,
    127.28,
    133.87,
    132.68,
    130.48,
    126.74,
    129.66,
    133.69,
    134.6,
    136.8,
    136.48,
    140.28,
    138.5,
    141.31,
    141.52,
    141.95,
    143.25,
    142.64,
    139.65,
    140.7,
    143.64,
    141.06,
    137.18,
    136.47,
    134.01,
    129.8,
    128.37,
    130.29,
    127.25,
    127.96,
    130.53,
    128.25,
    124.94,
    119.61,
    123.25,
    119.51,
    115.02,
    119.41,
    114.97,
    117.16,
    118.13,
    122.58,
    116.75,
    115.66,
    113.08,
    114.58,
    113.96,
    113.16,
    116.52,
    114.79,
    116.7,
    112.4,
    110.75,
    109.31,
    111.67,
    105.93,
    105.84,
    108.3,
    112.8,
    114.04,
    114.14,
    117.75,
    114.56,
    117.01,
    117.23,
    117.24,
    114.92,
    111.43,
    106.88,
    107.19,
    110.39,
    106.64,
    107.87,
    112.02,
    112.03,
    112.68,
    118.54,
    116.62,
    112.57,
    112.26,
    109.37,
    109.08,
    113.89,
    115.21,
    119.31,
    120.17,
    116.52,
    114.85,
    112.19,
    111.44,
    112.77,
    109.91,
    114.62,
    114.7,
    115.04,
    108.36,
    108.21,
    105.44,
    113.6,
    114.59,
    116.64,
    115.48,
    115.9,
    118.78,
    118.87,
    118.22,
    118.14,
    117.5,
    120.65,
    119.82,
    122.65,
    122.88,
    122.51,
    120.32,
    120.86,
    118.12,
    115.07,
    114.77,
    114.7,
    117.7,
    111.3,
    110.34,
    109.91,
    109.15,
    110.55,
    108.68,
    107.48,
    110.48,
    109.42,
    111.78,
    111.87,
    105.31,
    105.87,
    103.9,
    103.63,
    103.85,
    101.83,
    100.01,
    100.57,
    99.17,
    98.81,
    98.09,
    100.74,
    98.09,
    96.15,
    99.3,
    102.41,
    102.22,
    102.24,
    99.57,
    98.71,
    98.05,
    98.3,
    99.71,
    97.18,
    100.78,
    101.39,
    100.29,
    100.53,
    101.48,
    102.97,
    104.93,
    94.82,
    92.6,
    96.58,
    94.66,
    90.5,
    87.07,
    83.49,
    86.7,
    88.65,
    88.91,
    87.4,
    94.17,
    96.73,
    96.03,
    98.72,
    98.99,
    98.5,
    97.8,
    95.83,
    97.33,
    98.82,
    97.6,
    96.25,
    95.44,
    101.45,
    101.28,
    100.83,
    99.87,
    97.31,
    95.15,
    93.95,
    93.07,
    93.56,
    95.85,
    95.31,
    91.2,
    90.86,
    89.15,
    89.63,
    90.25,
    88.26,
    89.81,
    87.93,
    86.46,
    88.95,
    88.73,
    89.7,
    88.71,
    86.77,
    88.16,
    88.8,
    89.24,
    92.26,
    91.91,
    92.8,
    92.16,
    91.78,
    93.91,
    99.28,
    101.21,
    99.21,
    96.73,
    99.16,
    100.71,
    97.95,
    99.87,
    101.43,
    108.8,
    105.22,
    103.47,
    108.04,
    100,
    95.46,
    94.86,
    95,
    94.95,
    97.1,
    95.78,
    94.59,
    92.05,
    91.8,
    91.07,
    89.35,
    90.1,
    90.3,
    90.51,
    92.31,
    94.02,
    95.58,
    94.17,
    94.65,
    92.66,
    91.01,
    91.66,
    94.25,
    96.55,
    101.07,
    102.46,
    101.93,
    105.84,
    104.22,
    106.26,
    106.06,
];

let dailyPriceChanges = [];
for (let i = 0; i < dailyPrices.length - 1; i++) 
    dailyPriceChanges.push((dailyPrices[i + 1] - dailyPrices[i]) / dailyPrices[i]);
const riskFreeRate = 0.015;
const annualReturns = Math.pow(dailyPrices[dailyPrices.length - 1] / dailyPrices[0], 1 / 9) - 1;
const volatility = stdev(dailyPriceChanges) * Math.sqrt(252);
const sharpeRatio = (annualReturns - riskFreeRate) / volatility;
console.log(sharpeRatio);

// Function to find standard deviation
function stdev(array) {
    const mean = array.reduce((a, b) => a + b) / array.length;
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / array.length);
}
