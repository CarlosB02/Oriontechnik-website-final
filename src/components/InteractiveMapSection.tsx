'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { zoom as d3Zoom, zoomIdentity } from 'd3-zoom';
import { select } from 'd3-selection';
import 'd3-transition';
import { feature } from 'topojson-client';
import type { Topology, Objects } from 'topojson-specification';
import styles from './InteractiveMapSection.module.css';

/* ── Country Flag Datasets ── */
const row1Countries = [
  { code: 'pt', name: 'Portugal' },
  { code: 'es', name: 'Spain' },
  { code: 'fr', name: 'France' },
  { code: 'nl', name: 'The Netherlands' },
  { code: 'gb', name: 'Great Britain' },
  { code: 'se', name: 'Sweden' },
  { code: 'gr', name: 'Greece' },
  { code: 'be', name: 'Belgium' },
  { code: 'pl', name: 'Poland' },
  { code: 'ca', name: 'Canada' },
  { code: 'us', name: 'United States of America' },
  { code: 'cl', name: 'Chile' },
];

const row2Countries = [
  { code: 'br', name: 'Brazil' },
  { code: 'dz', name: 'Algeria' },
  { code: 'ma', name: 'Morocco' },
  { code: 'eg', name: 'Egypt' },
  { code: 'et', name: 'Ethiopia' },
  { code: 'ae', name: 'United Arab Emirates' },
  { code: 'id', name: 'Indonesia' },
  { code: 'my', name: 'Malaysia' },
  { code: 'th', name: 'Thailand' },
  { code: 'kr', name: 'South Korea' },
  { code: 'tw', name: 'Taiwan' },
];

/* ── ISO 3166-1 Numeric IDs ── */
const GLOBAL_PRESENCE_IDS = new Set([
  '620', // Portugal
  '724', // Spain
  '250', // France
  '528', // Netherlands
  '826', // United Kingdom
  '752', // Sweden
  '300', // Greece
  '056', // Belgium
  '616', // Poland
  '124', // Canada
  '840', // United States
  '152', // Chile
  '076', // Brazil
  '012', // Algeria
  '504', // Morocco
  '818', // Egypt
  '231', // Ethiopia
  '784', // UAE
  '360', // Indonesia
  '458', // Malaysia
  '764', // Thailand
  '410', // South Korea
  '158', // Taiwan
]);

const NATO_IDS = new Set([
  '840', // United States
  '826', // United Kingdom
  '250', // France
  '276', // Germany
  '380', // Italy
  '124', // Canada
  '056', // Belgium
  '528', // Netherlands
  '442', // Luxembourg
  '578', // Norway
  '208', // Denmark
  '352', // Iceland
  '620', // Portugal
  '300', // Greece
  '792', // Turkey
  '724', // Spain
  '616', // Poland
  '203', // Czech Republic
  '348', // Hungary
  '100', // Bulgaria
  '642', // Romania
  '703', // Slovakia
  '705', // Slovenia
  '233', // Estonia
  '428', // Latvia
  '440', // Lithuania
  '191', // Croatia
  '008', // Albania
  '499', // Montenegro
  '807', // North Macedonia
  '246', // Finland
  '752', // Sweden
]);

const mapConfigurations = [
  {
    id: 'global',
    tab: 'Global Presence',
    highlightedIds: GLOBAL_PRESENCE_IDS,
    highlightColor: '#3D5E6B',
    hoverColor: '#2A454F',
    title: 'Local support wherever you need',
    body: 'We have a solid network of locations ready to help you in whatever you need.',
    metrics: [
      { value: '23', label: 'Countries' },
      { value: '57', label: 'Facilities' },
      { value: '268', label: 'Staff' },
    ],
  },
  {
    id: 'nato',
    tab: 'NATO Countries',
    highlightedIds: NATO_IDS,
    highlightColor: '#003478',
    hoverColor: '#002255',
    title: 'NATO countries',
    body: 'We are a NATO Supply & Procurement Agency, they trust us, so you can too.',
    metrics: [
      { value: '32', label: 'Members' },
      { value: '13 209', label: 'Planes' },
      { value: '7', label: 'Other' },
    ],
  },
];

const MAP_WIDTH = 800;
const MAP_HEIGHT = 480;

interface GeoFeature {
  id: string;
  properties: {
    name?: string;
  };
  geometry: any;
}

interface InteractiveMapProps {
  highlightedIds: Set<string>;
  highlightColor: string;
  hoverColor: string;
}

function InteractiveMap({
  highlightedIds,
  highlightColor,
  hoverColor,
}: InteractiveMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<any>(null);
  const [geographies, setGeographies] = useState<GeoFeature[]>([]);
  const [hoveredCountry, setHoveredCountry] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  const projection = geoMercator()
    .scale(125)
    .center([10, 32])
    .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);

  const pathGenerator = geoPath().projection(projection);

  // Fetch TopoJSON data (local first, fallback to CDN)
  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      try {
        const res = await fetch('/data/countries-110m.json');
        if (!res.ok) throw new Error('Local file failed');
        const topo = (await res.json()) as Topology<Objects>;
        if (cancelled) return;
        const countries = feature(topo, topo.objects.countries as any) as any;
        setGeographies(countries.features);
      } catch {
        try {
          const res = await fetch(
            'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
          );
          const topo = (await res.json()) as Topology<Objects>;
          if (cancelled) return;
          const countries = feature(topo, topo.objects.countries as any) as any;
          setGeographies(countries.features);
        } catch (err) {
          console.error('Failed to load map data', err);
        }
      }
    };

    loadData();
    return () => {
      cancelled = true;
    };
  }, []);

  // Setup D3 Zoom
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const zoomBehavior = d3Zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .translateExtent([
        [0, 0],
        [MAP_WIDTH, MAP_HEIGHT],
      ])
      .on('zoom', (event) => {
        select(gRef.current).attr('transform', event.transform);
      });

    select(svgRef.current).call(zoomBehavior);
    zoomRef.current = zoomBehavior;
  }, []);

  const handleZoomIn = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.4);
  }, []);

  const handleZoomOut = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1 / 1.4);
  }, []);

  const handleReset = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    select(svgRef.current)
      .transition()
      .duration(500)
      .call(zoomRef.current.transform, zoomIdentity);
  }, []);

  return (
    <div className={styles.mapPlate}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className={styles.composableMap}
      >
        <g ref={gRef}>
          {geographies.map((geo) => {
            const countryId = String(geo.id).padStart(3, '0');
            const isHighlighted =
              highlightedIds.has(countryId) || highlightedIds.has(String(geo.id));
            const isHovered =
              hoveredCountry?.name === (geo.properties.name || '');

            let fill = '#E2E7EB';
            if (isHighlighted && isHovered) fill = hoverColor;
            else if (isHighlighted) fill = highlightColor;
            else if (isHovered) fill = '#BCC8D1';

            return (
              <path
                key={countryId}
                d={pathGenerator(geo as any) || ''}
                fill={fill}
                stroke="#FFFFFF"
                strokeWidth={0.6}
                className={styles.countryPath}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                  if (rect) {
                    setHoveredCountry({
                      name: geo.properties.name || 'Region',
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                    });
                  }
                }}
                onMouseLeave={() => setHoveredCountry(null)}
              />
            );
          })}
        </g>
      </svg>

      {/* Lightweight Custom Hover Tooltip */}
      {hoveredCountry && (
        <div
          className={styles.mapTooltip}
          style={{
            left: `${hoveredCountry.x}px`,
            top: `${hoveredCountry.y - 12}px`,
          }}
        >
          {hoveredCountry.name}
        </div>
      )}

      {/* D3 Zoom Controls */}
      <div className={styles.zoomControls}>
        <button
          type="button"
          className={styles.zoomBtn}
          onClick={handleZoomIn}
          aria-label="Zoom in on map"
        >
          +
        </button>
        <button
          type="button"
          className={styles.zoomBtn}
          onClick={handleZoomOut}
          aria-label="Zoom out on map"
        >
          −
        </button>
        <button
          type="button"
          className={`${styles.zoomBtn} ${styles.zoomReset}`}
          onClick={handleReset}
          aria-label="Reset map zoom"
        >
          ↺
        </button>
      </div>
    </div>
  );
}

function FlagCard({ code, name }: { code: string; name: string }) {
  return (
    <span className={styles.flagCard} aria-label={name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        loading="lazy"
        src={`https://flagcdn.com/w80/${code}.png`}
        srcSet={`https://flagcdn.com/w160/${code}.png 2x`}
        alt={`${name} flag`}
        className={styles.flagImg}
      />
      <span className={styles.flagName}>{name}</span>
    </span>
  );
}

export default function InteractiveMapSection() {
  const [activeMapIndex, setActiveMapIndex] = useState(0);
  const currentMap = mapConfigurations[activeMapIndex];

  return (
    <div className={styles.interactiveSectionWrap}>
      {/* ── MAP TABS & STAGE ── */}
      <section className={styles.mapStageSection} aria-label="Interactive Global Presence Map">
        <div className="container">
          {/* Tab buttons */}
          <div className={styles.tabButtonsRow} role="tablist" aria-label="Map perspective selector">
            {mapConfigurations.map((m, i) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                className={`${styles.tabBtn} ${activeMapIndex === i ? styles.tabActive : ''}`}
                aria-selected={activeMapIndex === i}
                onClick={() => setActiveMapIndex(i)}
              >
                {m.tab}
              </button>
            ))}
          </div>

          {/* Map Display & Sidebar Metrics */}
          <div className={styles.mapContainer} key={currentMap.id}>
            <div className={styles.mapVisualPlate}>
              <InteractiveMap
                highlightedIds={currentMap.highlightedIds}
                highlightColor={currentMap.highlightColor}
                hoverColor={currentMap.hoverColor}
              />
            </div>

            <aside className={styles.sidebarPanel}>
              <span className={styles.sidebarBadge}>
                {activeMapIndex === 0 ? 'GLOBAL NETWORK' : 'ALLIANCE AGENCY'}
              </span>
              <h3 className={styles.sidebarTitle}>{currentMap.title}</h3>
              <p className={styles.sidebarBody}>{currentMap.body}</p>

              <div className={styles.metricsBox}>
                <ul className={styles.metricsList}>
                  {currentMap.metrics.map((m, i) => (
                    <li key={i} className={styles.metricItem}>
                      <strong className={styles.metricVal}>{m.value}</strong>
                      <span className={styles.metricLbl}>{m.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── FLAG MARQUEE ROWS ── */}
      <section className={styles.flagsMarqueeSection} aria-label="Partner Countries Marquee">
        <div className={styles.marqueeContainer}>
          {/* Row 1 */}
          <div className={`${styles.marqueeRow} ${styles.row1}`}>
            {[...row1Countries, ...row1Countries, ...row1Countries].map((c, i) => (
              <FlagCard key={`r1-${i}`} code={c.code} name={c.name} />
            ))}
          </div>

          {/* Row 2 */}
          <div className={`${styles.marqueeRow} ${styles.row2}`}>
            {[...row2Countries, ...row2Countries, ...row2Countries].map((c, i) => (
              <FlagCard key={`r2-${i}`} code={c.code} name={c.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
